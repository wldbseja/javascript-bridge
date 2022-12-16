const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { GAME_ITEM, ERROR_PRINT_STRING } = require('./constants');

class App {
  #bridgeGame;
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
    this.handlingMoving = this.handlingMoving.bind(this);
  }

  handlingBridgeSize(size) {
    try {
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
    }
  }

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
