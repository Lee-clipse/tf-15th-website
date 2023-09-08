import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TeamService } from './team.service';

@Controller('api/team')
@ApiTags('TEAM API')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  // Create Team
  @Post('/create')
  @ApiOperation({
    summary: '스텝이 팀 생성',
  })
  async createTeam() {
    return this.teamService.createTeam();
  }

  // View Waiting Team
  @Get('/waiting')
  @ApiOperation({
    summary: '현재 대기중인 팀 목록 조회',
  })
  async getWaitingTeam() {
    const teamList = await this.teamService.getWaitingTeam();
    return { code: 200, teamList };
  }

  // Plus Team Score
  @Get('/plus')
  @ApiOperation({
    summary: '팀 점수 획득',
  })
  @ApiQuery({
    name: 'teamId',
    type: 'string',
  })
  @ApiQuery({
    name: 'plusScore',
    type: 'number',
  })
  async plusTeamScore(
    @Query('teamId') teamId: string,
    @Query('plusScore', ParseIntPipe) plusScore: number,
  ) {
    return this.teamService.plusTeamScore(teamId, plusScore);
  }
}
