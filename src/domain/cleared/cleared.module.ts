import { Module } from '@nestjs/common';
import { ClearedService } from './cleared.service';
import { ClearedEntity } from './entity/cleared.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomLoggerService } from 'src/module/custom.logger';

@Module({
  imports: [TypeOrmModule.forFeature([ClearedEntity])],
  providers: [ClearedService, CustomLoggerService],
  exports: [ClearedService],
})
export class ClearedModule {}
