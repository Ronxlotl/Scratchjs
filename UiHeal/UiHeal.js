/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UiHeal extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Active", "./UiHeal/costumes/Active.svg", {
        x: 233.05263,
        y: -88.5
      }),
      new Costume("Inactive", "./UiHeal/costumes/Inactive.svg", {
        x: 233.05263,
        y: -88.5
      }),
      new Costume(
        "Inactive(Cooling Down)",
        "./UiHeal/costumes/Inactive(Cooling Down).svg",
        { x: 233.05263, y: -88.5 }
      )
    ];

    this.sounds = [new Sound("pop", "./UiHeal/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Activate" },
        this.whenIReceiveActivate
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Deactivate(Cool Down)" },
        this.whenIReceiveDeactivateCoolDown
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Reactivate" },
        this.whenIReceiveReactivate
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveActivate() {
    this.costume = "Active";
    while (true) {
      if (this.stage.vars.healthState == "Low Health") {
        if (this.touching("mouse") && this.mouse.down) {
          this.broadcast("Heal Player");
          this.broadcast("Deactivate(Cool Down)");
          this.costume = "Inactive(Cooling Down)";
          while (!!this.mouse.down) {
            yield;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveDeactivateCoolDown() {
    this.costume = "Inactive(Cooling Down)";
    yield* this.wait(20);
    this.broadcast("Reactivate");
  }

  *whenIReceiveReactivate() {
    this.costume = "Inactive";
    this.visible = true;
    while (true) {
      this.moveAhead();
      if (
        (this.stage.vars.health == 25 || this.stage.vars.health == 1) &&
        this.stage.vars.playersHealthLow == "Yes"
      ) {
        this.broadcast("Activate");
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    this.costume = "Inactive";
    this.visible = true;
    while (true) {
      this.moveAhead();
      if (this.stage.vars.healthState == "Low Health") {
        this.broadcast("Activate");
      }
      yield;
    }
  }
}
