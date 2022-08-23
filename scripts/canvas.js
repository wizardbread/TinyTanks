import { fish } from "./fish.js"; // Creats a new Fish Object

////////////////////////////////////////////////
const tankSize = document.querySelectorAll(".tank");
const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("tank_Canvas"));
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = tankSize[0].clientWidth);
const CANVAS_HEIGHT = (canvas.height = tankSize[0].clientHeight);

//////////////////////////////////
const fishSprite = new Image();
fishSprite.src = "./images/testfish.png";
let spriteHeight = 100;
let spriteWidth = 100;
let frameX = 0;
let frameY = 0;
let step = 0;

export function startTank() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(fishSprite, frameX, frameY, 100, 100, 0, 0, 100, 100);
  requestAnimationFrame(startTank);
}
