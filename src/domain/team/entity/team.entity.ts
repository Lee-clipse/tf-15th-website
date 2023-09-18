import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';
import { UserEntity } from '../../user/entity/user.entity';

@Entity({ name: 'team' })
export class TeamEntity {
  @PrimaryColumn({ name: 'team_id' })
  id!: string;

  @Column({})
  name!: string;

  @Column({})
  score!: number;

  @Column({})
  count!: number;

  @Column({})
  date!: string;

  // JOIN
  @OneToMany(() => UserEntity, (user) => user.team)
  users: UserEntity[];
}
