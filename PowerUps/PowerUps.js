/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PowerUps extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Blank", "./PowerUps/costumes/Blank.svg", { x: 0, y: 0 }),
      new Costume("Health", "./PowerUps/costumes/Health.svg", {
        x: 22.959991137186677,
        y: 57.16510416666665
      }),
      new Costume("Bomb", "./PowerUps/costumes/Bomb.svg", {
        x: 49.79146919431281,
        y: 51.499999999999915
      })
    ];

    this.sounds = [new Sound("pop", "./PowerUps/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
  }

  *whenGreenFlagClicked2() {
    this.moveAhead();
    this.visible = false;
  }

  *whenGreenFlagClicked3() {}
}
