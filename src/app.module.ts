import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GameModule } from './domain/game/game.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import * as moment from 'moment';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';

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
          level: 'debug',
          format: winstonFormat,
        }),
        new winston.transports.File({
          dirname: `./logs`,
          filename: `${moment(new Date()).format('YYYY-MM-DD')}.log`,
          level: 'debug',
          format: winstonFormat,
        }),
      ],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './env/prod.env',
    }),
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        readyLog: true,
        config: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          username: 'default',
          password: configService.get<string>('PASSWORD'),
        },
      }),
      inject: [ConfigService],
    }),
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
