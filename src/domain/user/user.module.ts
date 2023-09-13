import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { TeamModule } from '../team/team.module';
import { CustomLoggerService } from 'src/module/custom.logger';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => TeamModule),
  ],
  controllers: [UserController],
  providers: [UserService, CustomLoggerService],
  exports: [UserService],
})
export class UserModule {}
