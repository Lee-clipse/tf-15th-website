import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { CustomLoggerService } from 'src/module/custom.logger';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [GameService, CustomLoggerService],
})
export class GameModule {}
