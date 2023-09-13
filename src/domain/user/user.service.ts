import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserFormDto } from './dto/user_form.dto';
import * as md5 from 'md5';
import { TeamService } from '../team/team.service';
import { UserJoinDto } from './dto/user_join.dto';
import { getCurrentDateTime } from 'src/utils/utils';
// import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
// import { Logger } from 'winston';
import { CustomLoggerService } from 'src/module/custom.logger';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @Inject(forwardRef(() => TeamService))
    private readonly teamService: TeamService,
    private readonly customLogger: CustomLoggerService,
  ) {}

  TEAM_MAX_COUNT = 5;

  // Register User
  registerUser(userForm: UserFormDto) {
    // 이름 + 번호 뒷 4자리 => HASH
    const identifier = userForm.name + userForm.phoneNumber.slice(-4);
    const userId = md5(identifier).toString();
    this.userRepository.save({
      id: userId,
      ...userForm,
      teamId: '-',
      score: 0,
      date: getCurrentDateTime(),
    });
    return { code: 200, userId };
  }

  // Reconfirm QR
  async reconfirmQR(name: string, phoneNumber: string) {
    const identifier = name + phoneNumber;
    const userId = md5(identifier).toString();
    const userExist = await this.getUserRow(userId);
    if (userExist === null) {
      this.customLogger.writeLog(
        'warn',
        'GET',
        '/user/reconfirm-qr',
        '미접수 사용자',
        { name, phoneNumber },
      );
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, userId };
  }

  // View User Info
  async getUserInfo(userId: string) {
    const userInfo = await this.getUserRow(userId);
    if (userInfo === null) {
      this.customLogger.writeLog('warn', 'GET', '/user/info', '미접수 사용자', {
        userId,
      });
      return { code: 404, message: 'Undefined User' };
    }

    let teamName = '-';
    if (userInfo.teamId !== '-') {
      // 사용자의 소속 팀이 존재하는 경우 함께 반환
      const teamInfo = await this.teamService.getTeamInfo(userInfo.teamId);
      teamName = teamInfo.teamName;
    }

    // 현재 정원 미달 팀들의 정보
    const teamList = await this.teamService.getWaitingTeam();
    return { code: 200, userInfo: { ...userInfo, teamName }, teamList };
  }

  // Get Team Info Of User
  async getTeamInfoOfTeam(userId: string) {
    const userInfo = await this.getUserRow(userId);
    if (userInfo === null) {
      this.customLogger.writeLog(
        'warn',
        'GET',
        '/user/team-info',
        '미접수 사용자',
        { userId },
      );
      return { code: 404, message: 'Undefined User' };
    }

    const teamId = userInfo.teamId;
    // 소속 팀이 없는 경우
    if (teamId === '-') {
      return { code: 200, teamId: '-' };
    }
    const teamInfo = await this.teamService.getTeamInfo(teamId);
    const { teamName, score } = teamInfo;
    return { code: 200, teamId, teamName, score };
  }

  // Join User
  async joinTeam(userJoinDto: UserJoinDto) {
    const { userId, teamId } = userJoinDto;

    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.writeLog(
        'warn',
        'POST',
        '/user/join',
        '미접수 사용자',
        { userId },
      );
      return { code: 404, message: 'Undefined User' };
    }

    // 이미 해당 팀에 소속된 참가자인 경우 (스텝의 미스 클릭)
    const currTeamId = userRow.teamId;
    if (currTeamId === teamId) {
      return { code: 202, message: 'Already Join Same Team' };
    }

    // 팀 정원이 다 찬 경우 (스텝의 미스 클릭)
    const teamRow = await this.teamService.getTeamRow(teamId);
    const currTeamCount = Number(teamRow.count);
    if (currTeamCount >= this.TEAM_MAX_COUNT) {
      return { code: 202, message: 'Full Team Count' };
    }

    // 등록
    await this.userRepository.update(userId, { teamId: teamId });
    const count = await this.teamService.plusTeamCount(teamId);
    return { code: 200, teamId, teamName: teamRow.name, count };
  }

  // Get User Team
  async getUserTeam(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      this.customLogger.writeLog('warn', 'GET', '/user/team', '미접수 사용자', {
        userId,
      });
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, teamId: userRow.teamId };
  }

  // Team Service에서 호출
  // Break Team
  async updateUserToSolo(teamId: string, teamScore: number) {
    await this.userRepository
      .createQueryBuilder('user')
      .update()
      .set({ score: teamScore, teamId: '-' })
      .where('user.team_id = :teamId', { teamId })
      .execute();
  }

  // Plus User Score
  async plusUserScore(userId: string, score: number) {
    await this.userRepository.update(userId, {
      score: () => `score + ${score}`,
    });
    const userRow = await this.getUserRow(userId);
    return { code: 200, score: userRow.score };
  }

  async getUserRow(userId: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id = :userId', { userId })
      .getOne();
  }
}
