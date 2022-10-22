import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PlayerPlayer from "./PlayerPlayer/PlayerPlayer.js";
import PlayerYou from "./PlayerYou/PlayerYou.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import UiLayout from "./UiLayout/UiLayout.js";
import PowerUps from "./PowerUps/PowerUps.js";
import Vfx from "./Vfx/Vfx.js";
import UiHeal from "./UiHeal/UiHeal.js";
import UiOofEnemies from "./UiOofEnemies/UiOofEnemies.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import Blank from "./Blank/Blank.js";
import MenuBg from "./MenuBg/MenuBg.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  PlayerPlayer: new PlayerPlayer({
    x: 223.43756320839995,
    y: 4.403044580100332,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  PlayerYou: new PlayerYou({
    x: 223.43756320839995,
    y: 4.403044580100332,
    direction: 90,
    costumeNumber: 1,
    size: 120,
    visible: false,
    layerOrder: 8
  }),
  Sprite1: new Sprite1({
    x: 223.43756320839995,
    y: 4.403044580100332,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: false,
    layerOrder: 5
  }),
  UiLayout: new UiLayout({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  PowerUps: new PowerUps({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Vfx: new Vfx({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  UiHeal: new UiHeal({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  UiOofEnemies: new UiOofEnemies({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 117.5294083889761,
    visible: true,
    layerOrder: 12
  }),
  Blank: new Blank({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  MenuBg: new MenuBg({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
