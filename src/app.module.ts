import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { TeamModule } from './domain/team/team.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'prod' ? './env/prod.env' : './env/test.env',
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    UserModule,
    TeamModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
