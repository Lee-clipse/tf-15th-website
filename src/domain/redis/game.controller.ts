import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { GameService } from './game.service';

@Controller('game-api')
@ApiTags('Zero Game API')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/test')
  @ApiOperation({
    summary: 'redis 테스트',
  })
  async test() {
    this.gameService.test();
    return;
  }

  @Get('/init')
  @ApiOperation({
    summary: '스텝이 팀 생성',
  })
  @ApiQuery({
    name: 'teamId',
    type: 'string',
  })
  async createTeam(@Query('teamId') teamId: string) {
    console.log(teamId);
    return this.gameService.createTeam();
  }
}
