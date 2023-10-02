import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class EndTeamDto {
  @ApiProperty({
    description: 'teamId',
    type: String,
  })
  @IsString()
  teamId: string;

  @ApiProperty({
    description: 'index',
    type: String,
  })
  @IsString()
  index: string;

  @ApiProperty({
    description: 'score',
    type: Number,
  })
  @Transform(() => Number)
  score: number;
}
