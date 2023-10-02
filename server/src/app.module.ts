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
import { ClearedModule } from './domain/cleared/cleared.module';

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
          level: 'info',
          format: winstonFormat,
        }),
        new winston.transports.File({
          dirname: `./error-logs`,
          filename: `${moment(new Date()).format('YYYY-MM-DD')}.log`,
          level: 'warn',
          format: winstonFormat,
        }),
        new winston.transports.File({
          dirname: `./logs`,
          filename: `${moment(new Date()).format('YYYY-MM-DD')}.log`,
          level: 'info',
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
    ClearedModule,
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
