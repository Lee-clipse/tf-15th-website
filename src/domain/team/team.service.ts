import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './entity/team.entity';
import { teamNameGenerate } from 'src/utils/team_name.generate';
import * as md5 from 'md5';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
  ) {}

  TEAM_MAX_COUNT = 5;

  // Create Team
  createTeam() {
    // 현재 시간을 시드로 hash 생성
    const currentTime = new Date();
    const teamId = md5(currentTime.toISOString());

    const teamName = teamNameGenerate();
    this.teamRepository.save({
      id: teamId,
      name: teamName,
      score: -100,
      count: 0,
    });
    return { code: 200, teamId, count: 0 };
  }

  // Plus Team Score
  async plusTeamScore(teamId: string, plusScore: number) {
    const teamRow = await this.getTeamRow(teamId);
    const currScore = Number(teamRow.score);
    this.teamRepository.save({
      ...teamRow,
      score: currScore + plusScore,
    });
    return { code: 200, score: currScore + plusScore };
  }

  // UserService에서 호출
  // 해당 팀의 멤버 수를 증가
  async plusTeamCount(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    const currCount = Number(teamRow.count);
    this.teamRepository.save({
      ...teamRow,
      count: currCount + 1,
    });
    return { count: currCount + 1 };
  }

  // UserService에서 호출
  // 해당 팀의 멤버 수를 반환
  async getCurrTeamCount(teamId: string) {
    const teamInfo = await this.getTeamRow(teamId);
    const currCount = Number(teamInfo.count);
    return currCount;
  }

  // View Waiting Team
  // UserService에서 호출
  // 현재 정원 미달 팀들의 정보를 반환
  async getWaitingTeam() {
    return await this.teamRepository
      .createQueryBuilder('team')
      .where('team.count < :TEAM_MAX_COUNT', {
        TEAM_MAX_COUNT: this.TEAM_MAX_COUNT,
      })
      .getMany();
  }

  async getTeamRow(teamId: string) {
    return await this.teamRepository
      .createQueryBuilder('team')
      .where('team.team_id = :teamId', { teamId })
      .getOne();
  }
}
