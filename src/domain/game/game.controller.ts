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
import { LOG_MAP_INDEX } from 'src/constants/consts';
import { TeamBlockDto } from './dto/team_block.dto';
import { DbService } from 'src/db/db.service';
import { CustomLoggerService } from 'src/module/custom.logger';

@Controller('game-api')
@ApiTags('Zero Game API')
export class GameController {
  constructor(
    private readonly gameService: GameService,
    private readonly db: DbService,
    private readonly customLogger: CustomLoggerService,
  ) {}

  //! TEST
  @Get('/')
  @ApiOperation({
    summary: 'TEST',
  })
  test() {
    return this.db.printMap();
  }

  // Init Team Map Index
  @Post('/init')
  @ApiOperation({
    summary: '스텝이 팀 생성',
  })
  @ApiBody({
    type: () => TeamInitDto,
  })
  initTeam(@Body() teamInitDto: TeamInitDto) {
    const { teamId } = teamInitDto;
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
  getUserTeam(@Query('teamId') teamId: string) {
    return this.gameService.getTeamIndex(teamId);
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
  getTeamBlock(@Query('teamId') teamId: string) {
    return this.gameService.getTeamBlock(teamId);
  }

  // Manage Block
  @Post('/manage-block')
  @ApiOperation({
    summary: '주사위 Block 여부를 조정',
  })
  @ApiBody({
    type: () => TeamBlockDto,
  })
  doTeamBlock(@Body() teamBlockDto: TeamBlockDto) {
    const { teamId, block } = teamBlockDto;
    return this.gameService.manageBlock(teamId, block);
  }

  // Move To Zone
  @Post('/to-zone')
  @ApiOperation({
    summary: '대기소로 자동 이동',
  })
  @ApiBody({
    type: () => TeamInitDto,
  })
  moveToZone(@Body() teamInitDto: TeamInitDto) {
    const { teamId } = teamInitDto;
    const res = this.gameService.moveToZone(teamId);
    if (res.code !== 200) {
      return { code: res.code };
    }
    const { currIndex, nextIndex } = res;
    this.customLogger.log(
      `[${teamId}]팀 대기소로 이동!  ${currIndex} -> ${nextIndex}`,
    );
    return { code: 200 };
  }

  // Roll Dice
  @Post('/next')
  @ApiOperation({
    summary: '주사위 굴려서 다음에 가야하는 칸 반환',
  })
  @ApiBody({
    type: () => TeamInitDto,
  })
  rollDice(@Body() teamInitDto: TeamInitDto) {
    try {
      const { teamId } = teamInitDto;

      const currIndex = this.db.getIndex(teamId);
      const currMap = this.db.printMap();

      const { nextIndex } = this.gameService.rollDice(teamId);
      this.gameService.moveForward(teamId, currIndex, nextIndex);

      const nextMap = this.db.printMap();

      this.customLogger.log(
        `[${teamId}]팀 부스로 이동!  ${currIndex}  ->  ${nextIndex}\n\tINDEX:  ${LOG_MAP_INDEX}\n\tBEFORE: ${currMap}\n\tAFTER:  ${nextMap}\n\n`,
      );
      return { code: 200, prevIndex: currIndex, nextIndex };
    } catch (error) {
      return { code: 500, prevIndex: '', nextIndex: '' };
    }
  }
}
