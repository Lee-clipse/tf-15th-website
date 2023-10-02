import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { CustomLoggerService } from 'src/module/custom.logger';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [GameController],
  providers: [GameService, CustomLoggerService],
})
export class GameModule {}
