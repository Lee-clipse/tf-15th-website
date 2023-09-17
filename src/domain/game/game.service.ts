import { MAP_INDEX, NEXT_INDEX, BATTLE_BOOTH } from '../../constants/consts';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { InjectRedis } from '@liaoliaots/nestjs-redis';
import { CustomLoggerService } from 'src/module/custom.logger';

@Injectable()
export class GameService {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    private readonly customLogger: CustomLoggerService,
  ) {}

  MAP_INDEX = MAP_INDEX;
  NEXT_INDEX = NEXT_INDEX;
  BATTLE_BOOTH = BATTLE_BOOTH;

  // Init Team Map Index
  async createTeam(teamId: string) {
    const beginIndex = this.MAP_INDEX[0];
    // 팀, map 둘 다 갱신
    this.redis.set(teamId, beginIndex);
    this.redis.set(`${teamId}-block`, 'false');
    this.redis.hincrby('map', '10', 1);
    return { index: beginIndex };
  }

  // View Map Index
  async getTeamIndex(teamId: string) {
    const currIndex = await this.redis.get(teamId);
    return { index: currIndex };
  }

  // Get Team Block
  async getTeamBlock(teamId: string) {
    const block = await this.redis.get(`${teamId}-block`);
    return { block };
  }

  // Manage Block
  async manageBlock(teamId: string, block: string) {
    await this.redis.set(`${teamId}-block`, `${block}`);
    return { code: 200 };
  }

  // Roll Dice
  async rollDice(teamId: string) {
    const currIndex = await this.redis.get(teamId);
    if (currIndex === null) {
      this.customLogger.error('/roll-dice', '존재하지 않는 팀', { teamId });
      return { nextIndex: null };
    }
    // 클리어
    if (Number(currIndex) === 50) {
      return { nextIndex: 0 };
    }
    /*
      @@ 유도 알고리즘 @@
      다음 라인 중에 대결 부스가 있는가?
        - 그렇다: 그 대결 부스에 대기 중인 팀 수는?
          - 0: 나머지 부스 중 빈 자리에 랜덤 배치
          - 1: 최우선순위
          - 2: X
        - 아니다: 나머지 부스 중 빈 자리에 랜덤 배치
    */
    // 현재 대기소에서 주사위를 굴린 경우
    if (Number(currIndex) % 10 === 0) {
      const promises = this.NEXT_INDEX[currIndex].map(async (index: string) => {
        const val = await this.redis.hget('map', index);
        return [index, val];
      });
      const res = await Promise.all(promises);

      // 다음 라인들
      // ex) { '11': '0', '12': '1', '13': '1' }
      const nextLine = Object.fromEntries(res);

      // 다음 라인 중 대결 부스 목록
      // ex) ['11']
      const nextBattleBoothIndex = this.BATTLE_BOOTH[currIndex];

      let nextIndex = '';
      // 다음 라인에 대결 부스 0개
      if (nextBattleBoothIndex.length == 0) {
        nextIndex = this.getRandomRoll(nextLine);
      }
      // 다음 라인에 대결 부스 1개
      else if (nextBattleBoothIndex.length == 1) {
        const waitingTeamCount = Number(nextLine[nextBattleBoothIndex]);

        // 대결 부스에 0팀
        // '0' 0 0 / '0' 0 1 / '0' 1 1 모두 1 이상 제외 랜덤
        if (waitingTeamCount === 0) {
          nextIndex = this.getRandomRoll(nextLine);
        }
        // 대결 부스에 1팀
        // '1' * 이면 1 최우선 배치
        else if (waitingTeamCount === 1) {
          nextIndex = nextBattleBoothIndex;
        }
        // 대결 부스에 2팀
        // '2' 0 0 / '2' 0 1 / '2' 1 1 모두 1 이상 제외 랜덤
        else if (waitingTeamCount === 2) {
          nextIndex = this.getRandomRoll(nextLine);
        }
        // 에러
        else {
          this.customLogger.error('/roll-dice', '대결부스 1개 있는 경우', {
            teamId,
            waitingTeamCount: `대결 부스에 ${waitingTeamCount}팀 대기`,
          });
          return { nextIndex: null, message: '1 Booth Error' };
        }
      }
      // 다음 라인에 대결 부스 2개
      else if (nextBattleBoothIndex.length == 2) {
        const [countL, countR] = [
          Number(nextLine[nextBattleBoothIndex[0]]),
          Number(nextLine[nextBattleBoothIndex[1]]),
        ];

        // 00, 11, 22의 경우
        // 아무 곳이나 상관없음
        if (countL === countR) {
          nextIndex = this.getRandomRoll(nextLine);
        }
        // 01의 경우
        // 대기 중인 1로 배치
        else if (countL + countR === 1) {
          nextIndex =
            countL === 1 ? nextBattleBoothIndex[0] : nextBattleBoothIndex[1];
        }
        // 12의 경우
        // 대기 중인 1로 배치
        else if (countL + countR === 3) {
          nextIndex =
            countL === 1 ? nextBattleBoothIndex[0] : nextBattleBoothIndex[1];
        }
        // 02의 경우
        // 아무 곳이나 상관 없지만 0으로 배치
        else if (countL + countR === 2 && countL * countR === 0) {
          nextIndex =
            countL === 0 ? nextBattleBoothIndex[0] : nextBattleBoothIndex[1];
        }
        // 에러
        else {
          this.customLogger.error('/roll-dice', '대결부스 2개 있는 경우', {
            teamId,
            waitingTeamCount: `대결 부스에 ${countL}, ${countR}팀 대기`,
          });
          return { nextIndex: null, message: '2 Booth Error' };
        }
      }
      // 에러
      else {
        this.customLogger.error('/roll-dice', '대결부스 ???개 있는 경우', {
          teamId,
          nextBattleBoothIndex,
        });
        return { nextIndex: null, message: 'Booth Error' };
      }

      return { nextIndex };
    }
    // 현재 라인에서 주사위를 굴린 경우
    else {
      const nextIndex = this.NEXT_INDEX[currIndex];

      return { nextIndex };
    }
  }

  // 대결 부스가 없는 현재 이 라인에서 랜덤 배치
  // Input ex) { '11': '0', '12': '1', '13': '1' }
  getRandomRoll(nextLine: { [k: string]: any }): string {
    // 값이 0인 요소의 키들을 필터링
    const zeroValueKeys = Object.keys(nextLine).filter(
      (key) => nextLine[key] === '0',
    );

    let nextIndex = '';
    // 랜덤 추출 가능
    if (zeroValueKeys.length > 0) {
      const randomIndex = Math.floor(Math.random() * zeroValueKeys.length);
      nextIndex = zeroValueKeys[randomIndex];
    }
    // 빈 부스가 없는 경우 전체 랜덤 추출
    else {
      const allKeys = Object.keys(nextLine);
      const randomIndex = Math.floor(Math.random() * allKeys.length);
      nextIndex = allKeys[randomIndex];
    }
    return nextIndex;
  }

  // 앞으로 이동 - DB에 실제 반영
  async moveForward(teamId: string, currIndex: string, nextIndex: string) {
    await this.redis.hincrby('map', currIndex, -1);
    await this.redis.hincrby('map', nextIndex, 1);
    await this.redis.set(teamId, nextIndex);
    await this.redis.set(`${teamId}-block`, 'true');
  }

  //! For Test
  async getCurrIndex(teamId: string) {
    const currIndex = await this.redis.get(teamId);
    return currIndex;
  }

  //! For Test
  async getMap() {
    const map = await this.redis.hvals('map');
    return map;
  }
}
