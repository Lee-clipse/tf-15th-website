import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { RedisService } from './redis.service';

@Controller('game-api')
@ApiTags('Zero Game API')
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

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
    return this.redisService.createTeam();
  }
}
