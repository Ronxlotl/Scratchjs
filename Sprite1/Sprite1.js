/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 60.25,
        y: 58.75
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Oof Enemies" },
        this.whenIReceiveOofEnemies
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Respawn" },
        this.whenIReceiveRespawn
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.moveAhead();
    this.visible = false;
    yield* this.wait(5);
    this.visible = true;
    while (true) {
      yield* this.wait(10);
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.glide(
        0.55,
        this.sprites["PlayerPlayer"].x,
        this.sprites["PlayerPlayer"].y
      );
      yield;
    }
  }

  *startAsClone2() {
    while (true) {
      yield* this.glide(
        0.55,
        this.sprites["PlayerPlayer"].x,
        this.sprites["PlayerPlayer"].y
      );
      yield;
    }
  }

  *whenIReceiveOofEnemies() {
    this.visible = false;
    for (let i = 0; i < 100; i++) {
      this.deleteThisClone();
      yield;
    }
    yield* this.wait(15);
    this.broadcast("Respawn");
  }

  *whenIReceiveRespawn() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.moveAhead();
    this.visible = false;
    yield* this.wait(5);
    this.visible = true;
    while (true) {
      yield* this.wait(10);
      this.createClone();
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["PlayerPlayer"].y - this.y,
          this.sprites["PlayerPlayer"].x - this.x
        )
      );
      yield;
    }
  }

  *startAsClone3() {
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["PlayerPlayer"].y - this.y,
          this.sprites["PlayerPlayer"].x - this.x
        )
      );
      yield;
    }
  }

  *whenIReceiveStart() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.moveAhead();
    this.visible = false;
    yield* this.wait(5);
    this.visible = true;
    while (true) {
      yield* this.wait(10);
      this.createClone();
      yield;
    }
  }
}
