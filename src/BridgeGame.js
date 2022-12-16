/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeMaker = require('./BridgeMaker');
const { GAME_ITEM } = require('./constants');

class BridgeGame {
  #randomBridge;
  #upPattern;
  #downPattern;
  #tryCount;
  #userBridge;
  constructor(size) {
    this.#randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#tryCount = 1;
    this.#upPattern = [];
    this.#downPattern = [];
    this.#userBridge = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  makePattern(userMove) {
    this.#userBridge.push(userMove);

    for (let i = 0; i < [userMove].length; i++) {
      if ([userMove][i] === this.#randomBridge[i]) {
        if ([userMove][i] === GAME_ITEM.UP) {
          this.#upPattern.push(GAME_ITEM.POSSIBLE);
          this.#downPattern.push(GAME_ITEM.SPACE);
        } else {
          this.#upPattern.push(GAME_ITEM.SPACE);
          this.#downPattern.push(GAME_ITEM.POSSIBLE);
        }
      } else {
        if ([userMove][i] === GAME_ITEM.UP) {
          this.#upPattern.push(GAME_ITEM.IMPOSSIBLE);
          this.#downPattern.push(GAME_ITEM.SPACE);
        } else {
          this.#upPattern.push(GAME_ITEM.SPACE);
          this.#downPattern.push(GAME_ITEM.IMPOSSIBLE);
        }
      }
    }
    return [this.#upPattern, this.#downPattern];
  }

  move() {
    let resultString;
    const lastIndex = this.#userBridge.length - 1;
    if (this.#randomBridge[lastIndex] !== this.#userBridge[lastIndex]) {
      resultString = '실패';
    } else {
      resultString = '성공';
    }

    return resultString;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
