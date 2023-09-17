import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './entity/team.entity';
import { teamNameGenerate } from 'src/utils/utils';
import * as md5 from 'md5';
import { UserService } from '../user/user.service';
import { CustomLoggerService } from 'src/module/custom.logger';

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
    const teamId = md5(currentTime.toISOString());
    const teamName = teamNameGenerate();
    const teamRow = {
      id: teamId,
      name: teamName,
      score: -100,
      count: 0,
    };
    try {
      await this.teamRepository.save(teamRow);
      return { code: 200, teamRow };
    } catch (error) {
      this.customLogger.error('/team/create', '생성 실패', { teamId });
    }
  }

  // Plus Team Score
  async plusTeamScore(teamId: string, plusScore: number) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.warn('/team/plus', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      await this.teamRepository.update(teamId, {
        score: () => `score + ${plusScore}`,
      });
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
      this.customLogger.warn('plusTeamCount()', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      await this.teamRepository.update(teamId, { count: () => 'count + 1' });
      return Number(teamRow.count) + 1;
    } catch (error) {
      this.customLogger.error('plusTeamCount()', '멤버 수 추가', { teamId });
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
        .getMany();
    } catch (error) {
      this.customLogger.error('/team/waiting', '탐색', {});
    }
  }

  // Spread Team Score
  async spreadTeamScore(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    if (teamRow === null) {
      this.customLogger.warn('/team/spread', '팀 찾기', { teamId });
      return { code: 404, message: 'Undefined Team' };
    }
    try {
      // 해당 팀에 속한 유저들의 score 변경
      await this.userService.spreadTeamScore(teamId, Number(teamRow.score));
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
      this.customLogger.warn('getTeamInfo()', '팀 찾기', { teamId });
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
}
