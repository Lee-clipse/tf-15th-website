import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/user/entity/user.entity';
import { TeamEntity } from 'src/domain/team/entity/team.entity';
import { ConfigService } from '@nestjs/config';
import { ClearedEntity } from 'src/domain/cleared/entity/cleared.entity';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('HOST'),
      port: this.configService.get<number>('PORT'),
      username: 'tftf',
      password: this.configService.get<string>('PASSWORD'),
      database: this.configService.get<string>('DATABASE'),
      entities: [UserEntity, TeamEntity, ClearedEntity],
      synchronize: true,
      // logging: true,
    };
  }
}
