/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MenuBg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MenuBg/costumes/costume1.svg", {
        x: 319.06906852852853,
        y: 192.19219246246246
      })
    ];

    this.sounds = [new Sound("pop", "./MenuBg/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStart() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }
}
