/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerYou extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayerYou/costumes/costume1.svg", {
        x: 25.950230124561216,
        y: 76.0763613307998
      })
    ];

    this.sounds = [new Sound("Meow", "./PlayerYou/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart2)
    ];

    this.vars.xvelocity2 = 0.000001044392256959518;
    this.vars.yvelocity2 = 0.0000012377833394404845;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.glide(
        0,
        this.sprites["PlayerPlayer"].x,
        this.sprites["PlayerPlayer"].y
      );
      yield;
    }
  }
}
