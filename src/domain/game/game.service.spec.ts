import { GameService } from './game.service';
import { Test, TestingModule } from '@nestjs/testing';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('GameService Test', () => {
  let service: GameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
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
              username: configService.get<string>('USERNAME'),
              password: configService.get<string>('PASSWORD'),
            },
          }),
          inject: [ConfigService],
        }),
      ],
      providers: [GameService],
    }).compile();

    service = module.get<GameService>(GameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
