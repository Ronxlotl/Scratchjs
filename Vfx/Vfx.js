/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Vfx extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Vfx/costumes/costume1.svg", {
        x: 255.25525525525524,
        y: 199.6996996996997
      }),
      new Costume("costume2", "./Vfx/costumes/costume2.svg", {
        x: 255.25525525525524,
        y: 199.69968969969966
      })
    ];

    this.sounds = [new Sound("pop", "./Vfx/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "VFX" }, this.whenIReceiveVfx),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.xvelocity3 = 0;
    this.vars.yvelocity3 = 0;
  }

  *whenIReceiveVfx() {
    while (true) {
      if (this.stage.vars.playerTouchingHealth == "Yes") {
        this.moveAhead();
        this.visible = true;
        this.effects.ghost = 0;
        this.costume = "costume1";
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.stage.vars.playerTouchingHealth = "No";
        this.visible = false;
        /* TODO: Implement stop other scripts in sprite */ null;
      }
      if (this.stage.vars.playerTouchingBomb == "Yes") {
        this.moveAhead();
        this.visible = true;
        this.effects.ghost = 0;
        this.costume = "costume2";
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.effects.ghost += 5;
        yield* this.wait(0);
        this.stage.vars.playerTouchingBomb = "No";
        /* TODO: Implement stop other scripts in sprite */ null;
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.moveAhead();
    this.visible = false;
  }
}
