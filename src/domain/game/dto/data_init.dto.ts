import { IsNumber, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DataInitDto {
  @ApiProperty({
    description: 'mapList',
    type: [],
  })
  @IsNumber({}, { each: true })
  mapList: number[];

  @ApiProperty({
    description: 'indexMap',
    type: {},
  })
  @IsObject()
  indexMap: Record<string, string>;

  @ApiProperty({
    description: 'blockMap',
    type: {},
  })
  @IsObject()
  blockMap: Record<string, string>;

  @ApiProperty({
    description: 'endTeamList',
    type: [],
  })
  endTeamList: string[];

  @ApiProperty({
    description: 'clearedTeamList',
    type: [],
  })
  clearedTeamList: string[];
}
