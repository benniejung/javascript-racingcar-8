import { Console } from "@woowacourse/mission-utils";
class App {
  async run() {
    let racingCars = []; // 경주할 자동차 이름을 저장할 배열
    let tryCount = 0; // 시도할 횟수를 저장할 변수
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    racingCars = input.split(",");
    tryCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default App;
