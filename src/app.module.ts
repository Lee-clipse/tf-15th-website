import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { TeamModule } from './domain/team/team.module';
import { ConfigModule } from '@nestjs/config';
import * as winston from 'winston';
import * as moment from 'moment';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import { LoggerMiddleware } from './middleware/logger.middleware';

const winstonLevel = 'silly';
const winstonFormat = winston.format.combine(
  winston.format.timestamp(),
  nestWinstonModuleUtilities.format.nestLike('SERVER', {
    prettyPrint: true,
  }),
);

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: winstonLevel,
          format: winstonFormat,
        }),
        new winston.transports.File({
          dirname: `./logs/${moment(new Date()).format('YYYY-MM-DD')}`,
          filename: 'history.log',
          level: winstonLevel,
          format: winstonFormat,
        }),
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env/prod.env',
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

// 모든 요청에 대해 NestJS 요청을 커스텀화함 (-> main.ts에 의해 winston으로 넘어감)
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
