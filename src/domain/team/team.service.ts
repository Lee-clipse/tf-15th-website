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
}
