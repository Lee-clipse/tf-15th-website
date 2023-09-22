import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { TeamEntity } from './entity/team.entity';
import { UserService } from '../user/user.service';
import { CustomLoggerService } from 'src/module/custom.logger';
import { NEXT_TEAM_ID, TEAM_NAME } from 'src/constants/consts';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    private readonly customLogger: CustomLoggerService,
  ) {}

  TEAM_MAX_COUNT = 5;

  // Create Team
  async createTeam() {
    // 현재 시간을 시드로 hash 생성
    const currentTime = new Date();
    const { id, name } = await this.teamIndentifierGenerator();
    const teamRow = {
      id,
      name,
      score: -100,
      count: 0,
      date: String(currentTime.getTime()),
    };
    try {
      await this.teamRepository.save(teamRow);

      // 로깅
      this.customLogger.log(`${name}팀 생성!`);
      return { code: 200, teamRow };
    } catch (error) {
      this.customLogger.error('/team/create', '생성 실패', { teamId: id });
    }
  }

  // Plus Team Score
  async plusTeamScore(teamId: string, plusScore: number) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.invalid('/team/plus', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      await this.teamRepository.update(teamId, {
        score: () => `score + ${plusScore}`,
      });

      // 로깅
      const afterScore = Number(teamRow.score) + plusScore;
      this.customLogger.log(
        `${teamRow.name}팀 ${plusScore}점 팀 점수 추가! (결과: ${afterScore}점)`,
      );
      return { code: 200, score: Number(teamRow.score) + plusScore };
    } catch (error) {
      this.customLogger.error('/team/plus', '점수 증가', { teamId });
    }
  }

  // UserService에서 호출
  // 해당 팀의 멤버 수를 증가
  async plusTeamCount(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.invalid('plusTeamCount()', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      await this.teamRepository.update(teamId, { count: () => 'count + 1' });
      return Number(teamRow.count) + 1;
    } catch (error) {
      this.customLogger.error('plusTeamCount()', '멤버 수 추가', { teamId });
    }
  }

  // UserService에서 호출
  // 해당 팀의 멤버 수를 감소
  async minusTeamCount(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.invalid('plusTeamCount()', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      await this.teamRepository.update(teamId, { count: () => 'count - 1' });
      return Number(teamRow.count) - 1;
    } catch (error) {
      this.customLogger.error('plusTeamCount()', '멤버 수 감소', { teamId });
    }
  }

  // View Waiting Team
  // UserService에서 호출
  // 현재 정원 미달 팀들의 정보를 반환
  async getWaitingTeam() {
    try {
      return await this.teamRepository
        .createQueryBuilder('team')
        .where('team.count < :TEAM_MAX_COUNT', {
          TEAM_MAX_COUNT: this.TEAM_MAX_COUNT,
        })
        .andWhere('team.id != :DASH', { DASH: '-' })
        .orderBy('team.date', 'ASC')
        .getMany();
    } catch (error) {
      this.customLogger.error('/team/waiting', '탐색', {});
    }
  }

  // Spread Team Score
  async spreadTeamScore(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.invalid('/team/spread', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      // 해당 팀에 속한 유저들의 score 변경
      await this.userService.spreadTeamScore(teamId, Number(teamRow.score));

      // 로깅
      this.customLogger.log(
        `${teamRow.name}팀 제로게임 ${teamRow.score}점으로 종료!!!!!!!!`,
      );
      return { code: 200 };
    } catch (error) {
      this.customLogger.error('/team/spread', '사용자에게 점수 전달', {
        teamId,
      });
    }
  }

  // UserService에서 호출
  // 현재 team 정보를 반환
  async getTeamInfo(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.invalid('getTeamInfo()', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    return { teamName: teamRow.name, score: teamRow.score };
  }

  async getTeamRow(teamId: string) {
    try {
      return await this.teamRepository
        .createQueryBuilder('team')
        .where('team.team_id = :teamId', { teamId })
        .getOne();
    } catch (error) {
      this.customLogger.error('getTeamRow()', 'teamId 찾기 실패', { teamId });
    }
  }

  async getTeamName(teamId: string) {
    const row = await this.getTeamRow(teamId);
    return row.name;
  }

  async teamIndentifierGenerator() {
    const latestTeam = await this.teamRepository.findOne({
      where: {
        id: Not('-'),
      },
      order: { date: 'DESC' },
    });
    // 서버에서 첫 팀 생성
    if (!latestTeam) {
      return { id: 'red1', name: '분리수거 잘하는 레드 1' };
    }
    const latestTeamId = latestTeam.id;
    const word = latestTeamId.match(/[a-zA-Z]+/g)[0];
    let number = Number(latestTeamId.match(/[0-9]+/g)[0]);
    if (word === 'purple') {
      number += 1;
    }
    console.log(word, number);
    const nextTeamId = `${NEXT_TEAM_ID[word]}${number}`;
    const nextTeamName = `${TEAM_NAME[NEXT_TEAM_ID[word]]} ${number}`;
    return { id: nextTeamId, name: nextTeamName };
  }

  async getEveryTeamScore() {
    return await this.teamRepository.find({
      select: ['id', 'score'],
      where: {
        id: Not('-'),
      },
    });
  }
}
