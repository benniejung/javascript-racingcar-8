import { MissionUtils } from "@woowacourse/mission-utils";
import { Console } from "@woowacourse/mission-utils";

class RacingCar {
  constructor(name) {
    this.name = name; // 자동차 이름
    this.moveCount = 0; // 자동차 전진횟수
  }
  createRacingCars(carNames) {
    return new RacingCar(carNames);
  }
  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveCount += 1;
    }
  }
  print() {
    Console.print(`${this.name} : ${"-".repeat(this.moveCount)}`);
  }
  getMoveCount() {
    return this.moveCount;
  }
  getName() {
    return this.name;
  }
}

export default RacingCar;
