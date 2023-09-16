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
      return cleared;
    });

    return this.clearedRepository.save(clearedEntities);
  }
}
