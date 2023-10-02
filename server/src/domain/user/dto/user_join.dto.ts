import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserJoinDto {
  @ApiProperty({
    description: 'user_id',
    type: String,
  })
  @IsString()
  userId: string;

  @ApiProperty({
    description: 'team_id',
    type: String,
  })
  @IsString()
  teamId: string;
}
