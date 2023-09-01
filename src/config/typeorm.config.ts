import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/user/entity/user.entity';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '111111',
  database: 'tf',
  entities: [UserEntity],
  synchronize: true,
};
