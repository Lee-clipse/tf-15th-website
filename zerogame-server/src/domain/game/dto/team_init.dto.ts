import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TeamInitDto {
  @ApiProperty({
    description: 'teamId',
    type: String,
  })
  @IsString()
  teamId: string;
}
