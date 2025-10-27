import { ERROR_MESSAGE } from "./Constants.js";

const validateInputCarNames = (inputCarNames) => {
  if (typeof inputCarNames !== "string") {
    throw new Error(ERROR_MESSAGE.INPUT_CAR_NAMES);
  }
  if (inputCarNames.length === 0) {
    throw new Error(ERROR_MESSAGE.INPUT_CAR_NAMES_EMPTY);
  }
  if (!inputCarNames.includes(",")) {
    throw new Error(ERROR_MESSAGE.INPUT_CAR_NAMES_SEPARATOR);
  }
};

const validateCarNames = (racingCars) => {
  if (racingCars.length < 2) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  }
  if (racingCars.some((car) => car.name.length > 5 || car.name.length === 0)) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_NAMES_LENGTH);
  }
  const uniqueNames = new Set(racingCars.map((car) => car.name));
  if (uniqueNames.size !== racingCars.length) {
    throw new Error(ERROR_MESSAGE.INVALID_DUPLICATE_CAR_NAMES);
  }
};

const validateTryCount = (tryCount) => {
  if (isNaN(tryCount) || tryCount <= 0) {
    throw new Error(ERROR_MESSAGE.INPUT_TRY_COUNT);
  }
};

export { validateInputCarNames, validateCarNames, validateTryCount };
