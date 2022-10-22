/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UiOofEnemies extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Active", "./UiOofEnemies/costumes/Active.svg", {
        x: -147.94736999999998,
        y: -88.5
      }),
      new Costume("Inactive", "./UiOofEnemies/costumes/Inactive.svg", {
        x: -147.94736999999998,
        y: -88.5
      }),
      new Costume(
        "Inactive(Cooling Down)",
        "./UiOofEnemies/costumes/Inactive(Cooling Down).svg",
        { x: -147.94736999999998, y: -88.5 }
      )
    ];

    this.sounds = [new Sound("pop", "./UiOofEnemies/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bomb - Activate" },
        this.whenIReceiveBombActivate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bomb - Deactivate(Cool Down)" },
        this.whenIReceiveBombDeactivateCoolDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bomb - Reactivate" },
        this.whenIReceiveBombReactivate
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Bomb - Reactivate" },
        this.whenIReceiveBombReactivate2
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveBombActivate() {
    this.costume = "Active";
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        this.broadcast("Oof Enemies");
        this.broadcast("Bomb - Deactivate(Cool Down)");
        while (!!this.mouse.down) {
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveBombDeactivateCoolDown() {
    this.costume = "Inactive(Cooling Down)";
    yield* this.wait(20);
    this.broadcast("Bomb - Reactivate");
  }

  *whenIReceiveBombReactivate() {
    this.costume = "Inactive";
    this.visible = true;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }

  *whenIReceiveBombReactivate2() {
    yield* this.wait(100);
    this.broadcast("Bomb - Activate");
  }

  *whenIReceiveStart() {
    this.costume = "Inactive";
    this.visible = true;
    while (true) {
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveStart2() {
    yield* this.wait(60);
    this.broadcast("Bomb - Activate");
  }
}
