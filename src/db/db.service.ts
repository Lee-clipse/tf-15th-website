import { Injectable } from '@nestjs/common';
import { NEXT_INDEX } from 'src/constants/consts';
import { CustomLoggerService } from 'src/module/custom.logger';

@Injectable()
export class DbService {
  constructor(private readonly customLogger: CustomLoggerService) {}
  private indexConverter = {
    '10': 0,
    '11': 1,
    '12': 2,
    '13': 3,
    '20': 4,
    '21': 5,
    '22': 6,
    '23': 7,
    '24': 8,
    '30': 9,
    '31': 10,
    '32': 11,
    '40': 12,
    '41': 13,
    '42': 14,
    '43': 15,
    '50': 16,
  };

  private mapList: number[] = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  private indexMap: Record<string, string> = {};
  private blockMap: Record<string, string> = {};

  getEvery() {
    return {
      mapList: this.mapList,
      indexMap: this.indexMap,
      blockMap: this.blockMap,
    };
  }

  initTeam(id: string): string {
    try {
      this.mapList[0] += 1;
      this.indexMap[id] = '10';
      this.blockMap[id] = 'true';
      return '10';
    } catch (error) {
      this.customLogger.error('Init Team', '에러', {
        mapList: JSON.stringify(this.mapList),
        indexMap: JSON.stringify(this.indexMap),
        blockMap: JSON.stringify(this.blockMap),
      });
      return '';
    }
  }

  getIndex(id: string): string {
    const index = this.indexMap[id];
    if (index === undefined) {
      return '';
    }
    return index;
  }

  getBlock(id: string): string {
    const index = this.blockMap[id];
    if (index === undefined) {
      return '';
    }
    return index;
  }

  setBlock(id: string, block: string) {
    this.blockMap[id] = block;
  }

  // Roll Dice 관련 함수
  getNextLineStatus(currIndex: string): Record<string, number> {
    const res = NEXT_INDEX[currIndex].map((index: string) => {
      const mapIndex = this.indexToMap(index);
      return [index, this.mapList[mapIndex]];
    });
    return Object.fromEntries(res);
  }

  moveForward(id: string, currIndex: string, nextIndex: string) {
    try {
      this.mapList[this.indexToMap(currIndex)] -= 1;
      this.mapList[this.indexToMap(nextIndex)] += 1;
      this.indexMap[id] = nextIndex;
      this.blockMap[id] = 'true';
      return nextIndex;
    } catch (error) {
      this.customLogger.error('Move To 부스', '에러', {
        mapList: JSON.stringify(this.mapList),
        indexMap: JSON.stringify(this.indexMap),
        blockMap: JSON.stringify(this.blockMap),
      });
      return '';
    }
  }

  moveToZone(id: string) {
    const currIndex = this.indexMap[id];
    const nextIndex = NEXT_INDEX[currIndex];

    if (currIndex === undefined) {
      return '';
    }

    try {
      this.mapList[this.indexToMap(currIndex)] -= 1;
      this.mapList[this.indexToMap(nextIndex)] += 1;
      this.indexMap[id] = nextIndex;
      return { currIndex, nextIndex };
    } catch (error) {
      this.customLogger.error('Move To 대기소', '에러', {
        currIndex,
        nextIndex,
        mapList: JSON.stringify(this.mapList),
        indexMap: JSON.stringify(this.indexMap),
        blockMap: JSON.stringify(this.blockMap),
      });
      return '';
    }
  }

  // Utils
  indexToMap(index: string): number {
    return Number(this.indexConverter[index]);
  }

  printMap() {
    return JSON.stringify(this.mapList);
  }
}
