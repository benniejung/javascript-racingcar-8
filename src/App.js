import Controller from "./Controller.js";
import View from "./View.js";
import RacingCar from "./RacingCar.js";

class App {
  async run() {
    const controller = new Controller(new View(), new RacingCar());
    await controller.gameStart();
  }
}

export default App;
