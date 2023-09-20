import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { CustomLoggerService } from 'src/module/custom.logger';

@Module({
  providers: [DbService, CustomLoggerService],
  exports: [DbService],
})
export class DbModule {}
