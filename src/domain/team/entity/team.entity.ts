import { Column, Entity, PrimaryColumn } from 'typeorm';

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
}
