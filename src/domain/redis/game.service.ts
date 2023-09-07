import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';

@Injectable()
export class GameService {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async test() {
    const map = await this.redis.hgetall('map');
    console.log(map);
  }

  createTeam() {
    // `set` in redis
    return { code: 200, index: 0 };
  }
}
