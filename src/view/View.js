import { Console } from "@woowacourse/mission-utils";

export default class View {
  inputCarNames() {
    return Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
  }
  inputTryCount() {
    return Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
  printRacingProcess(racingCars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      racingCars.forEach((racingCar) => {
        racingCar.move();
        racingCar.print();
      });
      Console.print("\n");
    }
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
      return Console.print(`최종 우승자 : ${winners[0]}`);
    }
    return Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
