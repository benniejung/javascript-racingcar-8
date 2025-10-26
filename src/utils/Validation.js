const validateInputCarNames = (inputCarNames) => {
  if (inputCarNames.length === 0) {
    throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
  }
  if (!inputCarNames.includes(",")) {
    throw new Error("[ERROR] 자동차 이름은 쉼표(,)로 구분해야 합니다.");
  }
};

const validateCarNames = (racingCars) => {
  if (racingCars.some((car) => car.name != String(car.name))) {
    throw new Error("[ERROR] 자동차 이름은 문자열이어야 합니다.");
  }
  if (racingCars.length < 2) {
    throw new Error("[ERROR] 자동차 개수는 최소 2개 이상이어야 합니다.");
  }
  if (racingCars.some((car) => car.name.length > 5 || car.name.length === 0)) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하이거나 공백일 수 없습니다.");
  }
  const uniqueNames = new Set(racingCars.map((car) => car.name));
  if (uniqueNames.size !== racingCars.length) {
    throw new Error("[ERROR] 자동차 이름이 중복되었습니다.");
  }
};

const validateTryCount = (tryCount) => {
  if (isNaN(tryCount)) {
    throw new Error("[ERROR] 시도할 횟수는 숫자값이 아닙니다.");
  }
};

export { validateInputCarNames, validateCarNames, validateTryCount };
