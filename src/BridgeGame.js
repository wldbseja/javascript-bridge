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
  #resultArray;
  constructor(size) {
    this.#randomBridge = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#tryCount = 1;
    this.#upPattern = [];
    this.#downPattern = [];
    this.#userBridge = [];
    this.#resultArray = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  makePattern(userMove) {
    this.#userBridge.push(userMove);

    const lastIndex = this.#userBridge.length - 1;

    for (let i = 0; i < [userMove].length; i++) {
      console.log(this.#randomBridge[lastIndex], this.#userBridge[lastIndex]);

      const u = this.#randomBridge[lastIndex] === GAME_ITEM.UP;
      const d = this.#randomBridge[lastIndex] === GAME_ITEM.DOWN;

      if (u && [userMove][i] === GAME_ITEM.UP) {
        this.#upPattern.push(GAME_ITEM.POSSIBLE);
        this.#downPattern.push(GAME_ITEM.SPACE);
      } else if (u && [userMove][i] === GAME_ITEM.DOWN) {
        this.#upPattern.push(GAME_ITEM.SPACE);
        this.#downPattern.push(GAME_ITEM.IMPOSSIBLE);
      }

      if (d && [userMove][i] === GAME_ITEM.DOWN) {
        this.#upPattern.push(GAME_ITEM.SPACE);
        this.#downPattern.push(GAME_ITEM.POSSIBLE);
      } else if (d && [userMove][i] === GAME_ITEM.UP) {
        this.#upPattern.push(GAME_ITEM.IMPOSSIBLE);
        this.#downPattern.push(GAME_ITEM.SPACE);
      }
    }
    return [
      this.#upPattern,
      this.#downPattern,
      this.#randomBridge,
      this.#userBridge,
    ];
  }

  move() {
    const lastIndex = this.#userBridge.length - 1;
    if (this.#randomBridge[lastIndex] !== this.#userBridge[lastIndex]) {
      this.#resultArray.push('실패');
    } else {
      this.#resultArray.push('성공');
    }

    return [this.#resultArray, this.#tryCount];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
