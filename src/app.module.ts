import { Module } from '@nestjs/common';
import { UserModule } from './domain/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.config';
import { TeamModule } from './domain/team/team.module';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule, utilities } from 'nest-winston';
import * as winston from 'winston';
import * as moment from 'moment';

//silly=0(lowest), debug=1, verbose=2, info=3, warn=4, error=5(highest)
const level값 = process.env.NODE_ENV === 'production' ? 'error' : 'silly';
const format값 = winston.format.combine(
  winston.format.timestamp(),
  utilities.format.nestLike('앞에붙는명칭', { prettyPrint: true }),
);

@Module({
  imports: [
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          //콘솔출력 지정
          level: level값,
          format: format값,
        }),
        new winston.transports.File({
          //파일저장 지정
          dirname: `./logs/${moment(new Date()).format('YYYY-MM-DD')}`,
          filename: 'history.log',
          level: level값,
          format: format값,
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
export class AppModule {}
