import Controller from "./controller/controller.js";
import View from "./view/View.js";
import RacingCar from "./model/RacingCar.js";

class App {
  async run() {
    const controller = new Controller(new View(), new RacingCar());
    controller.gameStart();
    /*     let tryCount = 0;
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    // if (isNaN(input)) {
    //   throw new Error("[ERROR] 시도할 횟수는 숫자값이 아닙니다.");
    // }
    if (!input.includes(",")) {
      throw new Error("[ERROR] 자동차 이름은 쉼표(,)로 구분해야 합니다.");
    }
    const racingCars = input.split(",").map((name) => new RacingCar(name));
    if (racingCars.length < 2) {
      throw new Error("[ERROR] 자동차 개수는 최소 2개 이상이어야 합니다.");
    }
    // 자동차 이름 5자 초과 체크
    racingCars.map((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하로 제한되어 있습니다.");
      }
    });
    // 자동차 이름 중복 체크
    racingCars.map((car) => {
      if (racingCars.filter((c) => c === car).length > 1) {
        throw new Error("[ERROR] 자동차 이름이 중복되었습니다.");
      }
    });
    tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    if (isNaN(tryCount)) {
      throw new Error("[ERROR] 시도할 횟수는 숫자값이 아닙니다.");
    }

    for (let i = 0; i < tryCount; i++) {
      racingCars.map((car) => {
        car.move();
        car.print();
      });
      Console.print("\n");
    }

    const maxMoveCount = Math.max(
      ...racingCars.map((car) => car.getMoveCount())
    );

    const winners = racingCars
      .filter((car) => car.getMoveCount() === maxMoveCount)
      .map((car) => car.getName());

    if (winners.length === 1) {
      Console.print(`최종 우승자 : ${winners[0]}`);
    } else {
      Console.print(`최종 우승자 : ${winners.join(", ")}`);
    } */
  }
}

export default App;
