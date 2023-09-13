import { TeamEntity } from './entity/team.entity';
import { Module, forwardRef } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { CustomLoggerService } from 'src/module/custom.logger';

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity]),
    forwardRef(() => UserModule),
  ],
  controllers: [TeamController],
  providers: [TeamService, CustomLoggerService],
  exports: [TeamService],
})
export class TeamModule {}
