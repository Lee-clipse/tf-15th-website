import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserFormDto } from './dto/user_form.dto';
import * as md5 from 'md5';
import { TeamService } from '../team/team.service';
import { UserJoinDto } from './dto/user_join.dto';
import { getCurrentDateTime } from 'src/utils/utils';
import { CustomLoggerService } from 'src/module/custom.logger';
import { ClearedService } from '../cleared/cleared.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
    private readonly clearedService: ClearedService,
    private readonly customLogger: CustomLoggerService,
  ) {}

  TEAM_MAX_COUNT = 5;
  CLEARED_SCORE = 0;

  // Register User
  async registerUser(userForm: UserFormDto) {
    // 이름 + 번호 뒷 4자리 => HASH
    const { name, phoneNumber } = userForm;
    const identifier = name + phoneNumber.slice(-4);
    const userId = md5(identifier).toString();
    try {
      await this.userRepository.save({
        id: userId,
        ...userForm,
        teamId: '-',
        score: -100,
        date: getCurrentDateTime(),
      });
    } catch (error) {
      const logObject = { name, phoneNumber };
      this.customLogger.error('/user/register', 'INSERT 도중', logObject);
    }
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      const logObject = { name, phoneNumber };
      this.customLogger.error('/user/register', 'INSERT 후', logObject);
      // 재저장
      await this.userRepository.save({
        id: userId,
        ...userForm,
        teamId: '-',
        score: -100,
        date: getCurrentDateTime(),
      });
      return { code: 404, userId };
    }
    // 로깅
    this.customLogger.log(`${name}-${phoneNumber.slice(-4)}님 접수!`);
    return { code: 200, userId };
  }

  // Reconfirm QR
  async reconfirmQR(name: string, phoneNumber: string) {
    const identifier = name + phoneNumber;
    const userId = md5(identifier).toString();
    const userExist = await this.getUserRow(userId);
    if (userExist === null) {
      const logObject = { name, phoneNumber };
      this.customLogger.invalid(
        '/user/reconfirm-qr',
        '미접수 사용자',
        logObject,
      );
      // 이름 && 전화번호로 검색
      const userExist = await this.userRepository
        .createQueryBuilder('user')
        .where('user.name = :name', { name })
        .andWhere('user.phone_number like :phoneNumber', {
          phoneNumber: `%${phoneNumber}`,
        })
        .getOne();
      if (userExist !== null) {
        return { code: 200, userId };
      }
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, userId };
  }

  // View User Info
  async getUserInfo(userId: string) {
    const userInfo = await this.getUserRow(userId);
    if (userInfo === null) {
      this.customLogger.invalid('/user/info', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }

    const isClearedUser = await this.clearedService.isClearedUser(userId);

    if (userInfo.teamId !== '-') {
      // 사용자의 소속 팀이 존재하는 경우 함께 반환
      const teamInfo = await this.teamService.getTeamInfo(userInfo.teamId);
      const { teamName, score } = teamInfo;
      return {
        code: 200,
        userInfo: { ...userInfo, teamName, teamScore: score, ...isClearedUser },
      };
    }
    // 팀이 없는 경우
    return {
      code: 200,
      userInfo: { ...userInfo, teamName: '-', teamScore: 0, ...isClearedUser },
    };
  }

  // Get Team Info Of User
  async getTeamInfoOfUser(userId: string) {
    const userInfo = await this.getUserRow(userId);
    if (userInfo === null) {
      this.customLogger.invalid('/user/team-info', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }

    const teamId = userInfo.teamId;
    const teamRow = await this.teamService.getTeamRow(teamId);
    const { id, name, score } = teamRow;
    // 소속 팀이 없는 경우
    if (id === '-') {
      return { code: 200, teamId: '-', score };
    }
    return { code: 200, teamId: id, teamName: name, score };
  }

  // Join User
  async joinTeam(userJoinDto: UserJoinDto) {
    const { userId, teamId } = userJoinDto;

    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/join', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }

    // 이미 해당 팀에 소속된 참가자인 경우 (스텝의 미스 클릭)
    const currTeamId = userRow.teamId;
    if (currTeamId === teamId) {
      this.customLogger.invalid('/user/join', '소속 팀에 중복 JOIN', {
        userId,
      });
      return { code: 202, message: 'Already Join Same Team' };
    }

    // 팀 정원이 다 찬 경우 (스텝의 미스 클릭)
    const teamRow = await this.teamService.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.error('/user/join', '존재하지 않는 팀', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    const currTeamCount = Number(teamRow.count);
    if (currTeamCount >= this.TEAM_MAX_COUNT) {
      this.customLogger.invalid('/user/join', 'Full 팀에 JOIN', { userId });
      return { code: 202, message: 'Full Team Count' };
    }

    try {
      // 등록
      await this.userRepository.update(userId, { teamId: teamId });
      const count = await this.teamService.plusTeamCount(teamId);

      // 로깅
      const nickname = await this.getUserNickName(userId);
      this.customLogger.log(`${nickname}님 ${teamRow.name}팀 참가!`);
      return { code: 200, teamId, teamName: teamRow.name, count };
    } catch (error) {
      this.customLogger.error('/user/join', '팀 JOIN 도중', { userId });
    }
  }

  async exitTeam(userJoinDto: UserJoinDto) {
    const { userId, teamId } = userJoinDto;

    const userRow = await this.getUserRow(userId);
    const teamRow = await this.teamService.getTeamRow(teamId);
    if (userRow === null) {
      this.customLogger.invalid('/user/exit', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }

    try {
      // 팀 탈퇴 & 점수 전파
      await this.userRepository.update(userId, {
        teamId: '-',
        score: Number(teamRow.score),
      });
      await this.teamService.minusTeamCount(teamId);

      // 로깅
      const nickname = `${userRow.name}-${userRow.phoneNumber.slice(-4)}`;
      this.customLogger.log(`${nickname}님 ${teamRow.name}팀 탈퇴!`);
      return { code: 200 };
    } catch (error) {
      this.customLogger.error('/user/exit', '팀 탈퇴 도중', { userId });
    }
  }

  // Give Goods
  async giveGoods(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/give-goods', '미접수 사용자', {
        userId,
      });
      return { code: 404, message: 'Undefined User' };
    }

    // 로깅
    const nickname = `${userRow.name}-${userRow.phoneNumber.slice(-4)}`;
    this.customLogger.log(`${nickname}님에게 굿즈 증정!`);
    return await this.clearedService.giveGoods(userId);
  }

  // Get User Team
  async getUserTeam(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/team', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, teamId: userRow.teamId };
  }

  // Team Service에서 호출
  // Break Team
  async updateUserToSolo(teamId: string, teamScore: number) {
    try {
      await this.userRepository
        .createQueryBuilder('user')
        .update()
        .set({ score: teamScore, teamId: '-' })
        .where('user.team_id = :teamId', { teamId })
        .execute();
    } catch (error) {
      this.customLogger.error('/team/break', '참가자 해체', { teamId });
    }
  }

  // Team Service에서 호출
  // Spread Team Score
  async spreadTeamScore(teamId: string, teamScore: number) {
    try {
      await this.userRepository
        .createQueryBuilder('user')
        .update()
        .set({ score: () => `100 + score + ${teamScore}` })
        .where('user.team_id = :teamId', { teamId })
        .execute();
      // 제로게임 클리어 한 경우 명단에 등재
      if (teamScore === this.CLEARED_SCORE) {
        const userIdList = await this.userRepository
          .createQueryBuilder('user')
          .select('user.user_id')
          .where('user.team_id = :teamId', { teamId })
          .getRawMany()
          .then((results) => results.map((result) => result.user_id));
        await this.clearedService.registerClearedUsers(teamId, userIdList);
      }
    } catch (error) {
      this.customLogger.error('/team/spread', '팀 점수 전파', { teamId });
    }
  }

  // Plus User Score
  async plusUserScore(userId: string, score: number) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/plus', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }
    try {
      await this.userRepository.update(userId, {
        score: () => `score + ${score}`,
      });

      // 로깅
      const nickname = `${userRow.name}-${userRow.phoneNumber.slice(-4)}`;
      const afterScore = Number(userRow.score) + score;
      this.customLogger.log(
        `${nickname}님 ${score}점 개인 점수 추가! (결과: ${afterScore}점)`,
      );

      // 소그룹 부스 체험해서 0점 성공
      if (afterScore === this.CLEARED_SCORE) {
        const userIdList = [userRow.id];
        await this.clearedService.registerClearedUsers(
          userRow.teamId,
          userIdList,
        );
      }
      return { code: 200, score: Number(userRow.score) + score };
    } catch (error) {
      this.customLogger.error('/user/plus', '점수 증가', { userId });
    }
  }

  // Get User Score
  async gertUserScore(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/score', '미접수 사용자', { userId });
      return { code: 404, message: 'Undefined User' };
    }
    const score = Number(userRow.score);
    return { code: 200, score };
  }

  // Voice Agree
  async agreeVoice(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.invalid('/user/voice-agree', '미접수 사용자', {
        userId,
      });
      return { code: 404, message: 'Undefined User' };
    }
    await this.userRepository.update(userId, { agreePI: () => 'agree_pi + 2' });
    return { code: 200 };
  }

  async getUserRow(userId: string) {
    try {
      return await this.userRepository
        .createQueryBuilder('user')
        .where('user.user_id = :userId', { userId })
        .getOne();
    } catch (error) {
      this.customLogger.error('getUserRow()', 'userId 찾기 실패', { userId });
    }
  }

  async getUserNickName(userId: string) {
    const row = await this.getUserRow(userId);
    return `${row.name}-${row.phoneNumber.slice(-4)}`;
  }
}
