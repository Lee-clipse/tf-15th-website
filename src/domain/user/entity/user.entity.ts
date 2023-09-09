import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryColumn('uuid', { name: 'user_id' })
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
}
