const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  constructor() {}

  play() {
    OutputView.outputGameStart();
    InputView.readBridgeSize();
  }
}

const app = new App();
app.play();
module.exports = App;
