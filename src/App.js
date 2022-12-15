const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const { ERROR_PRINT_STRING } = require('./constants');

class App {
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
  }

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.handlingBridgeSize);
  }

  handlingBridgeSize(number) {
    const size = Number(number);
    this.validateBridgeSize(size);
  }

  validateBridgeSize(size) {
    if (!(size >= 3 && size <= 20 && size % 1 == 0)) {
      throw Error(ERROR_PRINT_STRING.ERROR_BRIDGE_SIZE);
    }
  }
}

module.exports = App;
