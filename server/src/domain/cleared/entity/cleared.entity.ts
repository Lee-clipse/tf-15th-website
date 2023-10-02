import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cleared' })
export class ClearedEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ name: 'user_id' })
  userId!: string;

  @Column({ name: 'team_id' })
  teamId!: string;

  @Column({})
  date!: string;

  @Column({ name: 'is_received' })
  isReceived!: number;
}
