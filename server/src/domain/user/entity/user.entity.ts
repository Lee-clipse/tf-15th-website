import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { TeamEntity } from '../../team/entity/team.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn({ name: 'user_id' })
  id!: string;

  @Column({})
  name!: string;

  @Column({})
  age!: number;

  @Column({ name: 'phone_number' })
  phoneNumber!: string;

  @Column({})
  location!: string;

  @Column({ name: 'agree_pi' })
  agreePI!: number;

  @Column({})
  donation!: number;

  @Column({})
  date!: string;

  // zero game
  @Column({ name: 'team_id' })
  teamId!: string;

  @Column({})
  score!: number;

  // JOIN
  @ManyToOne(() => TeamEntity, (team) => team.users, { nullable: true })
  @JoinColumn({ name: 'team_id' })
  team!: TeamEntity;
}
