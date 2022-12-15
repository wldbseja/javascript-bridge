const App = require('../src/App');

describe('게임 기능 테스트', () => {
  test('validateBridgeSize', () => {
    const app = new App();

    expect(() => app.validateBridgeSize(2)).toThrow();
    expect(() => app.validateBridgeSize(21)).toThrow();
    expect(() => app.validateBridgeSize(3)).not.toThrow();
    expect(() => app.validateBridgeSize(20)).not.toThrow();
  });
});
