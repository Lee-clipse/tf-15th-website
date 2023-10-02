import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class UserFormDto {
  @ApiProperty({
    description: '이름',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '나이',
    type: Number,
    minimum: 1,
    maximum: 100,
  })
  @Transform(() => Number)
  age: number;

  @ApiProperty({
    description: '전화번호',
    type: String,
  })
  phoneNumber: string;

  @ApiProperty({
    description: '거주 지역',
    type: String,
  })
  location: string;

  @ApiProperty({
    description: '개인정보 제공 동의 여부',
    type: Number,
  })
  @Transform(() => Number)
  agreePI: number;

  @ApiProperty({
    description: '기부 금액',
    type: Number,
  })
  @Transform(() => Number)
  donation: number;
}
