import Controller from "./controller/controller.js";
import View from "./view/View.js";
import RacingCar from "./model/RacingCar.js";

class App {
  async run() {
    const controller = new Controller(new View(), new RacingCar());
    await controller.gameStart();
  }
}

export default App;
