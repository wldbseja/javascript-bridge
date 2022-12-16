const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');

class App {
  constructor() {}

  play() {
    OutputView.printGameStart();
  }
}

module.exports = App;
