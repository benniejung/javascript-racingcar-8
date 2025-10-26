import { Console } from "@woowacourse/mission-utils";
import { PRINT_MESSAGE } from "../utils/constants.js";

export default class View {
  inputCarNames() {
    return Console.readLineAsync(PRINT_MESSAGE.INPUT_CAR_NAMES);
  }
  inputTryCount() {
    return Console.readLineAsync(PRINT_MESSAGE.INPUT_TRY_COUNT);
  }
  printSingleTurn(racingCars) {
    racingCars.forEach((racingCar) => {
      racingCar.move();
      racingCar.print();
    });
    Console.print("\n");
  }
  printRacingProcess(racingCars, tryCount) {
    Console.print(PRINT_MESSAGE.RACING_PROCESS);
    for (let i = 0; i < tryCount; i++) {
      this.printSingleTurn(racingCars);
    }
    return;
  }
  printRacingResult(racingCars) {
    // 최대 이동 횟수 계산
    const maxMoveCount = Math.max(
      ...racingCars.map((racingCar) => racingCar.getMoveCount())
    );

    // 최대 이동 횟수를 가진 자동차 찾기
    const winners = racingCars
      .filter((racingCar) => racingCar.getMoveCount() === maxMoveCount)
      .map((racingCar) => racingCar.getName());

    // 우승자 출력
    if (winners.length === 1) {
      return Console.print(`${PRINT_MESSAGE.FINAL_WINNERS} ${winners[0]}`);
    }
    return Console.print(
      `${PRINT_MESSAGE.FINAL_WINNERS} ${winners.join(", ")}`
    );
  }
}
