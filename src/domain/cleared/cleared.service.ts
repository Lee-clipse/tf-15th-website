import { Injectable } from '@nestjs/common';
import { ClearedEntity } from './entity/cleared.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getCurrentDateTime } from 'src/utils/utils';

@Injectable()
export class ClearedService {
  constructor(
    @InjectRepository(ClearedEntity)
    private clearedRepository: Repository<ClearedEntity>,
  ) {}

  async registerClearedUsers(teamId: string, userIdList: string[]) {
    const clearedEntities = userIdList.map((userId) => {
      const cleared = new ClearedEntity();
      cleared.userId = userId;
      cleared.teamId = teamId;
      cleared.date = getCurrentDateTime();
      cleared.isReceived = 0;
      return cleared;
    });

    return this.clearedRepository.save(clearedEntities);
  }

  async isClearedUser(userId: string) {
    const row = await this.clearedRepository
      .createQueryBuilder('cleared')
      .where('cleared.user_id = :userId', { userId })
      .getOne();
    const isCleared = row ? 'true' : 'false';
    const isReceived = row ? Number(row.isReceived) : 0;
    return { isCleared, isReceived };
  }
}
