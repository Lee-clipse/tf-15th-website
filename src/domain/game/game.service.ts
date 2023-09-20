import { MAP_INDEX, NEXT_INDEX, BATTLE_BOOTH } from '../../constants/consts';
import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CustomLoggerService } from 'src/module/custom.logger';

@Injectable()
export class GameService {
  constructor(
    private readonly customLogger: CustomLoggerService,
    private readonly db: DbService,
  ) {}

  MAP_INDEX = MAP_INDEX;
  NEXT_INDEX = NEXT_INDEX;
  BATTLE_BOOTH = BATTLE_BOOTH;

  //! TEST
  test() {
    const res = this.db.getNextLineStatus('20');
    console.log(res);
  }

  // Init Team Map Index
  createTeam(teamId: string) {
    const res = this.db.initTeam(teamId);
    if (res === '') {
      this.customLogger.error('Init Team', '에러', { teamId });
      return { code: 500, index: '' };
    }
    return { code: 200, index: 10 };
  }

  // Get Map Index
  getTeamIndex(teamId: string) {
    const currIndex = this.db.getIndex(teamId);
    if (currIndex === '') {
      this.customLogger.error('Get Map Index', '존재하지 않는 팀', { teamId });
      return { code: 404, index: '' };
    }
    return { code: 200, index: currIndex };
  }

  // Get Team Block
  getTeamBlock(teamId: string) {
    const block = this.db.getBlock(teamId);
    if (block === '') {
      this.customLogger.error('Get Team Block', '존재하지 않는 팀', { teamId });
      return { code: 404, block: '' };
    }
    return { code: 200, block };
  }

  // Manage Block
  manageBlock(teamId: string, block: string) {
    const currIndex = this.db.getIndex(teamId);
    if (currIndex === '50') {
      return { code: 400, currIndex: '50', nextIndex: '50' };
    }
    // 대기소에서의 요청이 아닌 경우
    if (Number(currIndex) % 10 !== 0) {
      return { code: 400, currIndex: '', nextIndex: '' };
    }
    this.db.setBlock(teamId, block);
    return { code: 200 };
  }

  // Move To Zone
  moveToZone(teamId: string) {
    const currIndex = this.db.getIndex(teamId);
    if (currIndex === '50') {
      return { code: 400, currIndex: '50', nextIndex: '50' };
    }
    // 대기소에 있는데 또 대기소로 가라는 요청인 경우
    if (Number(currIndex) % 10 === 0) {
      return { code: 400, currIndex: '', nextIndex: '' };
    }
    const res = this.db.moveToZone(teamId);
    if (res === '') {
      this.customLogger.error('Move To Zone', '에러', { teamId });
      return { code: 500, currIndex: '', nextIndex: '' };
    }
    return { code: 200, ...res };
  }

  // Roll Dice
  rollDice(teamId: string) {
    const currIndex = this.db.getIndex(teamId);
    if (currIndex === '') {
      this.customLogger.error('/roll-dice', '존재하지 않는 팀', { teamId });
      return { nextIndex: '' };
    }
    // 클리어
    if (Number(currIndex) === 50) {
      return { nextIndex: '0' };
    }

    // 현재 라인에서 주사위를 굴린 경우
    if (Number(currIndex) % 10 !== 0) {
      const nextIndex = this.NEXT_INDEX[currIndex];
      return { nextIndex };
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
    // 다음 라인들
    // ex) { '11': '0', '12': '1', '13': '1' }
    const nextLine = this.db.getNextLineStatus(currIndex);
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
      else {
        nextIndex = this.getRandomRoll(nextLine);
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
        return { nextIndex: null };
      }
    }
    // 에러
    else {
      this.customLogger.error('/roll-dice', '대결부스 ???개 있는 경우', {
        teamId,
        nextBattleBoothIndex,
      });
      return { nextIndex: null };
    }
    return { nextIndex };
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
  moveForward(teamId: string, currIndex: string, nextIndex: string) {
    const res = this.db.moveForward(teamId, currIndex, nextIndex);
    if (res === '') {
      return { code: 500 };
    }
    return { code: 200, index: nextIndex };
  }

  getCurrMap() {
    return this.db.printMap();
  }
}
