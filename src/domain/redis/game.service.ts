import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';

@Injectable()
export class GameService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  MAP_INDEX = [
    '10',
    '11',
    '12',
    '13',
    '20',
    '21',
    '22',
    '23',
    '24',
    '30',
    '31',
    '32',
    '40',
    '41',
    '42',
    '43',
  ];

  // Init Team Map Index
  async createTeam(teamId: string) {
    const beginIndex = this.MAP_INDEX[0];
    this.redis.set(teamId, beginIndex);
    return { code: 200, index: beginIndex };
  }
}
