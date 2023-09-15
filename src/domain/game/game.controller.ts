import {
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { GameService } from './game.service';
import { TeamInitDto } from './dto/team_init.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

@Controller('game-api')
@ApiTags('Zero Game API')
export class GameController {
  constructor(
    private readonly gameService: GameService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

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
    const currIndex = await this.gameService.getCurrIndex(teamId);
    const beforeMap = await this.gameService.getMap();

    const res = await this.gameService.rollDice(teamId);
    const nextIndex = res.nextIndex;
    const afterMap = await this.gameService.getMap();

    const indexMap = [
      '-',
      1,
      2,
      3,
      '-',
      1,
      2,
      3,
      4,
      '-',
      1,
      2,
      '-',
      1,
      2,
      3,
      '-',
    ];
    this.logger.debug(
      `\n[${teamId}]\n  ${currIndex}  ->  ${nextIndex}\n\tINDEX:  ${indexMap}\n\tBEFORE: ${beforeMap}\n\tAFTER:  ${afterMap}\n\n`,
    );
    return res;
  }
}
