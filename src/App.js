const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { ERROR_PRINT_STRING } = require('./constants');

class App {
  #bridgeGame;
  #retryCount;
  #upPatten;
  #downPatten;
  #resultString;
  constructor() {
    this.handlingBridgeSize = this.handlingBridgeSize.bind(this);
    this.handlingReadMoving = this.handlingReadMoving.bind(this);
    this.handlingGameCommand = this.handlingGameCommand.bind(this);
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
    [this.#retryCount, this.#upPatten, this.#downPatten, this.#resultString] =
      this.#bridgeGame.move(userMove);

    if (this.#resultString === '성공') {
      OutputView.printMap(this.#upPatten, this.#downPatten);
      InputView.readMoving(this.handlingReadMoving);
    } else {
      OutputView.printMap(this.#upPatten, this.#downPatten);
      InputView.readGameCommand(this.handlingGameCommand);
    }
  }

  handlingGameCommand(retry) {
    this.validateRetry(retry);
    if (retry === 'R') {
      this.#bridgeGame.retry();
      InputView.readMoving(this.handlingReadMoving);
    } else {
      OutputView.printResult(
        this.#upPatten,
        this.#downPatten,
        this.#retryCount,
        this.#resultString
      );
      InputView.close();
    }
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

  validateRetry(retry) {
    if (!(retry === 'R' || retry === 'Q'))
      throw Error(ERROR_PRINT_STRING.ERROR_USER_INPUT);
  }
}
const app = new App();
app.play();
module.exports = App;
