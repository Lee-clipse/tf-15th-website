import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/user/entity/user.entity';
import { ENV } from '../constants/env';
import { TeamEntity } from 'src/domain/team/entity/team.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: ENV.HOST,
  port: ENV.PORT,
  username: ENV.USERNAME,
  password: ENV.PASSWORD,
  database: ENV.DATABASE,
  entities: [UserEntity, TeamEntity],
  synchronize: true,
};
