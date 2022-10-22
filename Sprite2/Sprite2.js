/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 88.2399673461914,
        y: 15.75
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Reset" }, this.whenIReceiveReset)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    while (true) {
      if (this.keyPressed("x")) {
        this.broadcast("Start");
        this.broadcast("Reset");
      }
      yield;
    }
  }

  *whenIReceiveReset() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
