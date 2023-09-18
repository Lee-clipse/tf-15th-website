import { Injectable } from '@nestjs/common';
import { ClearedEntity } from './entity/cleared.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getCurrentDateTime } from 'src/utils/utils';
import { CustomLoggerService } from 'src/module/custom.logger';

@Injectable()
export class ClearedService {
  constructor(
    @InjectRepository(ClearedEntity)
    private clearedRepository: Repository<ClearedEntity>,
    private readonly customLogger: CustomLoggerService,
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

  async giveGoods(userId: string) {
    try {
      await this.clearedRepository
        .createQueryBuilder('cleared')
        .update()
        .set({ isReceived: 1 })
        .where('cleared.user_id = :userId', { userId })
        .execute();
      return { code: 200 };
    } catch (error) {
      this.customLogger.error('/user/give-goods', '굿즈 수령 에러', { userId });
      return { code: 404, message: 'Invalid Update' };
    }
  }
}
