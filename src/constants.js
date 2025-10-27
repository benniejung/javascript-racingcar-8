const PRINT_MESSAGE = {
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  INPUT_TRY_COUNT: "시도할 횟수는 몇 회인가요?\n",
  RACING_PROCESS: "\n실행 결과",
  FINAL_WINNERS: "최종 우승자 :",
};

const ERROR_MESSAGE = {
  INPUT_CAR_NAMES: "[ERROR] 자동차 이름은 문자열이어야 합니다.",
  INPUT_CAR_NAMES_EMPTY: "[ERROR] 자동차 이름을 입력해주세요.",
  INPUT_TRY_COUNT:
    "[ERROR] 시도할 횟수는 숫자값이어야 하며, 0 이상이어야 합니다.",
  INPUT_CAR_NAMES_SEPARATOR: "[ERROR] 자동차 이름은 쉼표(,)로 구분해야 합니다.",

  INVALID_CAR_COUNT: "[ERROR] 자동차 개수는 최소 2개 이상이어야 합니다.",
  INVALID_CAR_NAMES_LENGTH:
    "[ERROR] 자동차 이름은 5자 이상이거나 공백일 수 없습니다.",
  INVALID_DUPLICATE_CAR_NAMES: "[ERROR] 자동차 이름이 중복되었습니다.",
};

export { PRINT_MESSAGE, ERROR_MESSAGE };
