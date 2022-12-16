const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { GAME_ITEM, ERROR_PRINT_STRING } = require('./constants');

class App {
  #bridgeSize;
  #bridgeGame;
  #randomBridge;
  #userBridge;
  #upPattern;
  #downPattern;
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
    this.handlingMoving = this.handlingMoving.bind(this);
  }

  handlingBridgeSize(size) {
    try {
      this.#bridgeSize = size;
      this.validateRangeSize(size);
      this.#bridgeGame = new BridgeGame(size);
      InputView.readMoving(this.handlingMoving);
    } catch (error) {
      MissionUtils.Console.print(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
      InputView.readBridgeSize(this.handlingBridgeSize);
    }
  }

  handlingMoving(move) {
    try {
      this.validateMove(move);
    } catch (error) {
      MissionUtils.Console.print(ERROR_PRINT_STRING.ERROR_USER_INPUT);
      InputView.readMoving(this.handlingMoving);
      return;
    }
    [this.#upPattern, this.#downPattern, this.#randomBridge, this.#userBridge] =
      this.#bridgeGame.makePattern(move);
    let [resultArray, tryCount] = this.#bridgeGame.move();

    this.decisionResult(resultArray, tryCount);
  }

  decisionResult(resultArray, tryCount) {}

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.handlingBridgeSize);
  }

  validateRangeSize(size) {
    if (
      !(
        size >= GAME_ITEM.MIN_BOUND &&
        size <= GAME_ITEM.MAX_BOUND &&
        size % GAME_ITEM.ONE == GAME_ITEM.ZERO
      )
    )
      throw Error(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
  }

  validateMove(move) {
    if (!(move === 'U' || move === 'D'))
      throw Error(ERROR_PRINT_STRING.ERROR_USER_INPUT);
  }
}

module.exports = App;
