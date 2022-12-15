const PRINT_STRING = {
  OUTPUT_GAME_START: '다리 건너기 게임을 시작합니다.\n',
  INPUT_BRIDGE_SIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_SPACE_MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  INPUT_GAME_RETRY:
    '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  OUTPUT_GAME_RESULT: '\n최종 게임 결과',
  OUTPUT_RESULT_PHRASES: (result) =>
    `\n게임 성공 여부: ${result}\n총 시도한 횟수: ${result}`,
};

const ERROR_PRINT_STRING = {
  ERROR_BRIDGE_SIZE: '[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.',
  ERROR_USER_INPUT: '[ERROR] 올바른 입력이 아닙니다.',
};

module.exports = { PRINT_STRING, ERROR_PRINT_STRING };
