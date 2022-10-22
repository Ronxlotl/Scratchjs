/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayerPlayer extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayerPlayer/costumes/costume1.svg", {
        x: 48,
        y: 50
      }),
      new Costume("costume2", "./PlayerPlayer/costumes/costume2.svg", {
        x: 46,
        y: 53
      })
    ];

    this.sounds = [new Sound("Meow", "./PlayerPlayer/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Heal Player" },
        this.whenIReceiveHealPlayer
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "Reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "Reset" }, this.whenIReceiveReset2)
    ];

    this.vars.xvelocity = 10.499962413080956;
    this.vars.yvelocity = -10.478769909841102;
  }

  *whenGreenFlagClicked() {
    this.stage.watchers.TimeSurvived.visible = false;
    this.stage.watchers.health.visible = false;
    this.moveAhead();
    this.visible = false;
  }

  *whenIReceiveHealPlayer() {
    this.stage.vars.health = 100;
  }

  *whenGreenFlagClicked2() {}

  *whenGreenFlagClicked3() {
    this.stage.watchers.healthState.visible = false;
  }

  *whenIReceiveReset() {
    this.stage.vars.maxHealth = 100;
    this.stage.vars.health = 100;
    this.vars.xvelocity = 0;
    this.vars.yvelocity = 0;
    this.stage.watchers.TimeSurvived.visible = true;
    this.stage.watchers.health.visible = true;
    this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
    this.goto(0, 0);
    this.direction = 90;
    this.visible = true;
  }

  *whenIReceiveStart() {
    this.visible = true;
    while (true) {
      if (this.keyPressed("up arrow") || this.keyPressed("w")) {
        this.vars.yvelocity += 3.5;
      }
      if (this.keyPressed("down arrow") || this.keyPressed("s")) {
        this.vars.yvelocity += -3.5;
      }
      if (this.keyPressed("left arrow") || this.keyPressed("a")) {
        this.vars.xvelocity += -3.5;
        this.direction = -90;
      }
      if (this.keyPressed("right arrow") || this.keyPressed("d")) {
        this.vars.xvelocity += 3.5;
        this.direction = 90;
      }
      this.vars.xvelocity = this.vars.xvelocity * 0.75;
      this.x += this.vars.xvelocity;
      this.vars.yvelocity = this.vars.yvelocity * 0.75;
      this.y += this.vars.yvelocity;
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.stage.vars.health += -1;
      }
      if (this.stage.vars.health == 0) {
        /* TODO: Implement stop all */ null;
      }
      this.moveAhead();
      yield;
    }
  }

  *whenIReceiveReset2() {
    this.stage.vars.playersHealthLow = "No";
    while (true) {
      if (this.stage.vars.health == 100) {
        this.stage.vars.healthState = "Full Health";
      }
      if (this.stage.vars.health == 50) {
        this.stage.vars.healthState = "Medium Health";
      }
      if (this.stage.vars.health == 25 || this.stage.vars.health == 5) {
        this.stage.vars.healthState = "Low Health";
        this.stage.vars.playersHealthLow = "Yes";
      }
      yield;
    }
  }
}
