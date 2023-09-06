import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisService {
  createTeam() {
    // `set` in redis
    return { code: 200, index: 0 };
  }
}
