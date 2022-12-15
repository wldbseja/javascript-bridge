const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { ERROR_PRINT_STRING } = require('./constants');

class App {
  #bridgeGame;
  #bridgeShapeArray;
  #userMoveArray;
  #upPatten;
  #downPatten;
  #resultString;
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
    this.handlingReadMoving = this.handlingReadMoving.bind(this);
  }

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.handlingBridgeSize);
  }

  handlingBridgeSize(number) {
    const size = Number(number);
    this.validateBridgeSize(size);
    this.#bridgeGame = new BridgeGame(size);
    InputView.readMoving(this.handlingReadMoving);
  }

  handlingReadMoving(userMove) {
    this.validateUserMove(userMove);
    const [bridge, move, upPatten, downPatten, resultString] =
      this.#bridgeGame.move(userMove);
    [
      this.#bridgeShapeArray,
      this.#userMoveArray,
      this.#upPatten,
      this.#downPatten,
      this.#resultString,
    ] = [bridge, move, upPatten, downPatten, resultString];
  }

  validateBridgeSize(size) {
    if (!(size >= 3 && size <= 20 && size % 1 == 0)) {
      throw Error(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
    }
  }

  validateUserMove(userMove) {
    if (!(userMove === 'U' || userMove === 'D'))
      throw Error(ERROR_PRINT_STRING.ERROR_USER_INPUT);
  }
}

module.exports = App;
