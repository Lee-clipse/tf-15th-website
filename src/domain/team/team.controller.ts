import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Get,
  ParseIntPipe,
  Post,
  Query,
  Logger,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamScoreDto } from './dto/team_score.dto';
import { TeamBreakDto } from './dto/team_break.dto';

@Controller('api/team')
@ApiTags('TEAM API')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  private readonly logger = new Logger(TeamController.name);

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
  @Post('/plus')
  @ApiOperation({
    summary: '팀 점수 획득',
  })
  @ApiBody({ type: () => TeamScoreDto })
  async plusTeamScore(@Body() teamScoreDto: TeamScoreDto) {
    const { teamId, score } = teamScoreDto;
    return this.teamService.plusTeamScore(teamId, score);
  }

  // Break
  @Post('/break')
  @ApiOperation({
    summary: '팀 해체',
  })
  @ApiBody({ type: () => TeamBreakDto })
  async breakTeam(@Body() teamBreakDto: TeamBreakDto) {
    const { teamId } = teamBreakDto;
    return this.teamService.breakTeam(teamId);
  }
}
