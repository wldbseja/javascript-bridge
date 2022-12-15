/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const MissionUtils = require('@woowacourse/mission-utils');
const { PRINT_STRING, GAME_STATUS } = require('./constants');

const OutputView = {
  printGameStart() {
    MissionUtils.Console.print(PRINT_STRING.OUTPUT_GAME_START);
  },
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(upPatten, downPatten) {
    const { START, LINE, END } = GAME_STATUS;
    const upRow = `${START}${[upPatten].join(LINE)}${END}`;
    const downRow = `${START}${[downPatten].join(LINE)}${END}`;
    MissionUtils.Console.print(upRow);
    MissionUtils.Console.print(downRow);
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

module.exports = OutputView;
