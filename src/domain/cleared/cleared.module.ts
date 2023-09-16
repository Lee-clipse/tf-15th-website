import { Module } from '@nestjs/common';
import { ClearedService } from './cleared.service';
import { ClearedEntity } from './entity/cleared.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClearedEntity])],
  providers: [ClearedService],
  exports: [ClearedService],
})
export class ClearedModule {}
