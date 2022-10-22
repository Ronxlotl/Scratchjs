/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class UiLayout extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./UiLayout/costumes/costume1.svg", {
        x: 233.05263157894734,
        y: -88.5
      })
    ];

    this.sounds = [new Sound("pop", "./UiLayout/sounds/pop.wav")];

    this.triggers = [];
  }
}
