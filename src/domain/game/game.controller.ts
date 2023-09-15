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
import { LOG_MAP_INDEX } from 'src/constants/consts';
import { TeamBlockDto } from './dto/team_block.dto';

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
    return await this.gameService.createTeam(teamId);
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
    return await this.gameService.getTeamIndex(teamId);
  }

  // Get Team Block
  @Get('/get-block')
  @ApiOperation({
    summary: '주사위를 이미 굴렸는지 여부를 반환',
  })
  @ApiQuery({
    name: 'teamId',
    type: 'string',
  })
  async getTeamBlock(@Query('teamId') teamId: string) {
    return await this.gameService.getTeamBlock(teamId);
  }

  // Manage Block
  @Post('/manage-block')
  @ApiOperation({
    summary: '주사위 Block 여부를 조정',
  })
  @ApiBody({
    type: () => TeamBlockDto,
  })
  async doTeamBlock(@Body() teamBlockDto: TeamBlockDto) {
    const { teamId, block } = teamBlockDto;
    return await this.gameService.manageBlock(teamId, block);
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

    // 이동
    await this.gameService.moveForward(teamId, currIndex, nextIndex);
    const afterMap = await this.gameService.getMap();

    this.logger.debug(
      `\n[${teamId}]\n  ${currIndex}  ->  ${nextIndex}\n\tINDEX:  ${LOG_MAP_INDEX}\n\tBEFORE: ${beforeMap}\n\tAFTER:  ${afterMap}\n\n`,
    );
    return res;
  }
}
