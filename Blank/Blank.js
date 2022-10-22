/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Blank extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Blank/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Blank/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.highestTimeSurvived = 4164.278;
    this.restartTimer();
    while (true) {
      this.stage.vars.TimeSurvived = this.timer;
      yield;
    }
  }

  *whenIReceiveStart() {
    this.stage.watchers.TimeSurvived.visible = true;
  }
}
