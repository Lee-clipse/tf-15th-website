import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';
import { TeamModule } from './domain/team/team.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UserModule, TeamModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
