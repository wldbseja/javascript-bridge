const App = require('../src/App');

describe('게임 기능 테스트', () => {
  test('validateRangeSize', () => {
    const app = new App();

    expect(() => app.validateRangeSize(2)).toThrow();
    expect(() => app.validateRangeSize(21)).toThrow();

    expect(() => app.validateRangeSize(3)).not.toThrow();
    expect(() => app.validateRangeSize(20)).not.toThrow();
  });
});
