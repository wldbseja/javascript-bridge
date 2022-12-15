/**
 * 다리 건너기 게임을 관리하는 클래스
 */
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const { GAME_STATUS } = require('./constants');

class BridgeGame {
  #bridgeShape;
  #userMoveArray;
  constructor(size) {
    this.#bridgeShape = BridgeMaker.makeBridge(
      size,
      BridgeRandomNumberGenerator.generate
    );
    this.#userMoveArray = [];
  }
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(userMove) {
    this.#userMoveArray.push(userMove);
    let resultString;
    let upPatten;
    let downPatten;
    if (this.#bridgeShape[this.#userMoveArray.length - 1] === GAME_STATUS.UP) {
      if (
        this.#userMoveArray[this.#userMoveArray.length - 1] === GAME_STATUS.UP
      ) {
        upPatten = GAME_STATUS.POSSIBLE;
        downPatten = GAME_STATUS.SPACE;
      } else {
        upPatten = GAME_STATUS.SPACE;
        downPatten = GAME_STATUS.IMPOSSIBLE;
      }
    }

    if (
      this.#bridgeShape[this.#userMoveArray.length - 1] === GAME_STATUS.DOWN
    ) {
      if (
        this.#userMoveArray[this.#userMoveArray.length - 1] === GAME_STATUS.DOWN
      ) {
        upPatten = GAME_STATUS.SPACE;
        downPatten = GAME_STATUS.POSSIBLE;
      } else {
        upPatten = GAME_STATUS.SPACE;
        downPatten = GAME_STATUS.IMPOSSIBLE;
      }
    }

    if (
      this.#bridgeShape[this.#userMoveArray.length - 1] !==
      this.#userMoveArray[this.#userMoveArray.length - 1]
    ) {
      resultString = '실패';
    } else {
      resultString = '성공';
    }

    return [
      this.#bridgeShape,
      this.#userMoveArray,
      upPatten,
      downPatten,
      resultString,
    ];
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}
}

module.exports = BridgeGame;
