import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class TeamScoreDto {
  @ApiProperty({
    description: 'teamId',
    type: String,
  })
  @IsString()
  teamId: string;

  @ApiProperty({
    description: '점수',
    type: Number,
  })
  @Transform(() => Number)
  score: number;
}
