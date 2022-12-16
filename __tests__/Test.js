const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

describe('게임 기능 테스트', () => {
  test('validateRangeSize', () => {
    const app = new App();

    expect(() => app.validateRangeSize(2)).toThrow();
    expect(() => app.validateRangeSize(21)).toThrow();

    expect(() => app.validateRangeSize(3)).not.toThrow();
    expect(() => app.validateRangeSize(20)).not.toThrow();
  });

  test('BridgeMaker - makeBridge', () => {
    randomNumber = {
      generateNumber() {
        number = 0;
        return number;
      },
    };
    randomNum = randomNumber.generateNumber;
    expect(BridgeMaker.makeBridge(3, randomNum)).toEqual(['D', 'D', 'D']);

    randomNumber = {
      generateNumber() {
        number = 1;
        return number;
      },
    };
    randomNum = randomNumber.generateNumber;
    expect(BridgeMaker.makeBridge(3, randomNum)).toEqual(['U', 'U', 'U']);
  });
});
