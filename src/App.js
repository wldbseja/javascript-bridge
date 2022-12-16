const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const { GAME_ITEM, ERROR_PRINT_STRING } = require('./constants');

class App {
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
  }

  handlingBridgeSize(size) {
    try {
      MissionUtils.Console.print(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
      InputView.readBridgeSize(this.handlingBridgeSize);
    } catch (error) {
      this.validateRangeSize(size);
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
