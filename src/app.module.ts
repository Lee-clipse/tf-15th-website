import { Module } from '@nestjs/common';
import { GameModule } from './domain/redis/game.module';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'dev' ? './env/dev.env' : './env/prod.env',
    }),
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        readyLog: true,
        config: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          username: configService.get<string>('USERNAME'),
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
