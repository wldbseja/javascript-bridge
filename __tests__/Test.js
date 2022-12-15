const App = require('../src/App');
const BridgeMaker = require('../src/BridgeMaker');

describe('게임 기능 테스트', () => {
  test('validateBridgeSize', () => {
    const app = new App();

    expect(() => app.validateBridgeSize(2)).toThrow();
    expect(() => app.validateBridgeSize(21)).toThrow();
    expect(() => app.validateBridgeSize(3)).not.toThrow();
    expect(() => app.validateBridgeSize(20)).not.toThrow();
  });

  test('BridgeMaker.makeBridge', () => {
    let test1 = {
      makeTest1() {
        let up = 1;
        return up;
      },
    };

    expect(BridgeMaker.makeBridge(1, test1.makeTest1)).toEqual(['U']);

    let test2 = {
      makeTest2() {
        let down = 0;
        return down;
      },
    };

    expect(BridgeMaker.makeBridge(1, test2.makeTest2)).toEqual(['D']);
  });
});
