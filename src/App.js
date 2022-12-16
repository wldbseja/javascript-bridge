const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeGame = require('./BridgeGame');
const { GAME_ITEM, ERROR_PRINT_STRING } = require('./constants');

class App {
  #bridgeGame;
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
  }

  handlingBridgeSize(size) {
    try {
      this.validateRangeSize(size);
      this.#bridgeGame = new BridgeGame(size);
    } catch (error) {
      MissionUtils.Console.print(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
      InputView.readBridgeSize(this.handlingBridgeSize);
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
}

module.exports = App;
