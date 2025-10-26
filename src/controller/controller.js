import {
  validateInputCarNames,
  validateCarNames,
  validateTryCount,
} from "../utils/validation.js";
import { Console } from "@woowacourse/mission-utils";

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  async gameStart() {
    try {
      const inputCarNames = await this.view.inputCarNames();
      validateInputCarNames(inputCarNames);
      const racingCars = inputCarNames
        .split(",")
        .map((name) => this.model.createRacingCars(name));
      validateCarNames(racingCars);
      const inputTryCount = await this.view.inputTryCount();
      validateTryCount(inputTryCount);
      this.view.printRacingProcess(racingCars, inputTryCount);
      this.view.printRacingResult(racingCars);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}
