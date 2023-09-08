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

  // View Map Index
  @Get('/where')
  @ApiOperation({
    summary: '팀의 현재 위치를 반환',
  })
  @ApiQuery({
    name: 'teamId',
    type: 'string',
  })
  async getUserTeam(@Query('teamId') teamId: string) {
    return this.gameService.getTeamIndex(teamId);
  }

  // Roll Dice
  @Post('/next')
  @ApiOperation({
    summary: '주사위 굴려서 다음에 가야하는 칸 반환',
  })
  @ApiBody({
    type: () => TeamInitDto,
  })
  async rollDice(@Body() teamInitDto: TeamInitDto) {
    const teamId = teamInitDto.teamId;
    return this.gameService.rollDice(teamId);
  }
}
