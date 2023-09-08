import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { GameService } from './game.service';
import { TeamInitDto } from './dto/team_init.dto';

@Controller('game-api')
@ApiTags('Zero Game API')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // Init Team Map Index
  @Post('/init')
  @ApiOperation({
    summary: '스텝이 팀 생성',
  })
  @ApiBody({
    type: () => TeamInitDto,
  })
  async initTeam(@Body() teamInitDto: TeamInitDto) {
    const teamId = teamInitDto.teamId;
    return this.gameService.createTeam(teamId);
  }
}
