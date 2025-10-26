import {
  validateInputCarNames,
  validateCarNames,
  validateTryCount,
} from "../src/utils/validation.js";
import { ERROR_MESSAGE } from "../src/utils/constants.js";

describe("입력 검증 테스트", () => {
  describe("validateInputCarNames", () => {
    test("빈 문자열 입력 시 에러 발생", () => {
      expect(() => validateInputCarNames("")).toThrow(
        ERROR_MESSAGE.INPUT_CAR_NAMES
      );
    });

    test("쉼표가 없는 입력 시 에러 발생", () => {
      expect(() => validateInputCarNames("pobi")).toThrow(
        ERROR_MESSAGE.INPUT_CAR_NAMES_SEPARATOR
      );
    });

    test("정상적인 입력은 에러가 발생하지 않음", () => {
      expect(() => validateInputCarNames("pobi,woni")).not.toThrow();
    });
  });

  describe("validateCarNames", () => {
    test("자동차 이름이 문자열이 아닐 때 에러 발생", () => {
      const racingCars = [{ name: null }, { name: "woni" }];
      expect(() => validateCarNames(racingCars)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_NAME
      );
    });

    test("자동차 개수가 2개 미만일 때 에러 발생", () => {
      const racingCars = [{ name: "pobi" }];
      expect(() => validateCarNames(racingCars)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_COUNT
      );
    });

    test("자동차 이름이 5자 초과일 때 에러 발생", () => {
      const racingCars = [{ name: "pobi" }, { name: "verylongname" }];
      expect(() => validateCarNames(racingCars)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_NAMES_LENGTH
      );
    });

    test("자동차 이름이 공백일 때 에러 발생", () => {
      const racingCars = [{ name: "" }, { name: "woni" }];
      expect(() => validateCarNames(racingCars)).toThrow(
        ERROR_MESSAGE.INVALID_CAR_NAMES_LENGTH
      );
    });

    test("자동차 이름이 중복될 때 에러 발생", () => {
      const racingCars = [{ name: "pobi" }, { name: "pobi" }];
      expect(() => validateCarNames(racingCars)).toThrow(
        ERROR_MESSAGE.INVALID_DUPLICATE_CAR_NAMES
      );
    });

    test("정상적인 자동차 이름들은 에러가 발생하지 않음", () => {
      const racingCars = [{ name: "pobi" }, { name: "woni" }, { name: "jun" }];
      expect(() => validateCarNames(racingCars)).not.toThrow();
    });
  });

  describe("validateTryCount", () => {
    test("문자열로 된 숫자 입력은 에러가 발생함", () => {
      expect(() => validateTryCount("abc")).toThrow(
        ERROR_MESSAGE.INPUT_TRY_COUNT
      );
    });

    test("0 입력 시 에러가 발생함", () => {
      expect(() => validateTryCount(0)).toThrow(ERROR_MESSAGE.INPUT_TRY_COUNT);
    });

    test("음수 입력 시 에러가 발생함", () => {
      expect(() => validateTryCount(-1)).toThrow(ERROR_MESSAGE.INPUT_TRY_COUNT);
    });

    test("정상적인 숫자 입력은 에러가 발생하지 않음", () => {
      expect(() => validateTryCount(5)).not.toThrow();
    });
  });
});
