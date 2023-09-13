import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeamEntity } from './entity/team.entity';
import { teamNameGenerate } from 'src/utils/utils';
import * as md5 from 'md5';
import { UserService } from '../user/user.service';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(TeamEntity)
    private teamRepository: Repository<TeamEntity>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}

  TEAM_MAX_COUNT = 5;

  // Create Team
  createTeam() {
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
    this.teamRepository.save(teamRow);
    return { code: 200, teamRow };
  }

  // Plus Team Score
  async plusTeamScore(teamId: string, plusScore: number) {
    await this.teamRepository.update(teamId, {
      score: () => `score + ${plusScore}`,
    });
    const teamRow = await this.getTeamRow(teamId);
    return { code: 200, score: teamRow.score };
  }

  // UserService에서 호출
  // 해당 팀의 멤버 수를 증가
  async plusTeamCount(teamId: string) {
    await this.teamRepository.update(teamId, { count: () => 'count + 1' });
    const teamRow = await this.getTeamRow(teamId);
    return teamRow.count;
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
      .andWhere('team.id != :DASH', { DASH: '-' })
      .getMany();
  }

  // Break Team
  async breakTeam(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);

    // 팀에 속한 모든 유저 가져오기
    const usersList = await this.teamRepository
      .createQueryBuilder('team')
      .relation('users')
      .of(teamRow)
      .loadMany();

    // 유저들의 score를 팀의 score로 업데이트
    const userIdList = usersList.map((entity) => entity.id);
    await this.userService.updateUserToSolo(userIdList, teamId, teamRow.score);

    // 팀의 count를 0으로 업데이트
    await this.teamRepository.update(teamId, { count: 0 });

    return { code: 200 };
  }

  // UserService에서 호출
  // 현재 team 정보를 반환
  async getTeamInfo(teamId: string) {
    const teamRow = await this.getTeamRow(teamId);
    return { teamName: teamRow.name, score: teamRow.score };
  }

  async getTeamRow(teamId: string) {
    return await this.teamRepository
      .createQueryBuilder('team')
      .where('team.team_id = :teamId', { teamId })
      .getOne();
  }
}
