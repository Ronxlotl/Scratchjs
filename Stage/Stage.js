/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 290.5405405405406,
        y: 229.72972972972968
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.health = 99;
    this.vars.costume = 2;
    this.vars.playerTouchingHealth = "No";
    this.vars.playerTouchingBomb = "No";
    this.vars.maxHealth = 100;
    this.vars.playersHealthLow = "No";
    this.vars.healthState = "Full Health";
    this.vars.TimeSurvived = 1.981;
    this.vars.highestTimeSurvived = 4164.278;
    this.vars.lettersSymbols = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")"
    ];

    this.watchers.health = new Watcher({
      label: "Health",
      style: "normal",
      visible: false,
      value: () => this.vars.health,
      x: 242,
      y: 176
    });
    this.watchers.TimeSurvived = new Watcher({
      label: "⏱Time Survived",
      style: "normal",
      visible: false,
      value: () => this.vars.TimeSurvived,
      x: 408,
      y: 175
    });
  }
}
