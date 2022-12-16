const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
  }

  handlingBridgeSize(size) {}

  play() {
    OutputView.printGameStart();
    InputView.readBridgeSize(this.handlingBridgeSize);
  }
}

module.exports = App;
