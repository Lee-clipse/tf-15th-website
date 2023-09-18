import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserGoodsDto {
  @ApiProperty({
    description: 'user_id',
    type: String,
  })
  @IsString()
  userId: string;
}
