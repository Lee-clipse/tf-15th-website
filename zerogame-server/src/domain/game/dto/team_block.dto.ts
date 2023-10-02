import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TeamBlockDto {
  @ApiProperty({
    description: 'teamId',
    type: String,
  })
  @IsString()
  teamId: string;

  @ApiProperty({
    description: 'block',
    type: String,
  })
  @IsString()
  block: string;
}
