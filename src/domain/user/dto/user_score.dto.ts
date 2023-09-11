import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UserScoreDto {
  @ApiProperty({
    description: 'user_id',
    type: String,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: '점수',
    type: Number,
  })
  @Transform(() => Number)
  score: number;
}
