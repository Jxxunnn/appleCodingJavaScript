"use strict";

const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

const dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
};
dino.draw();

class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

dino.x += 1;

const cactus = new Cactus();
cactus.draw();

let timer = 0;
const cactus여러개 = [];

function 프레임마다실행할거() {
  requestAnimationFrame(프레임마다실행할거);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) {
    const cactus = new Cactus();
    cactus여러개.push(cactus);
    cactus.draw();
  }
  cactus여러개.forEach((a, i, o) => {
    //x좌표가 0미만이면 제거
    if (a.x < 0) {
      //제거해라~
      a.splice(i, 1);
    }
    //a.x--;
    a.draw();
  });
  dino.y -= 2;

  if (점프중 == true) {
    dino.y--;
  }

  dino.draw();
}
프레임마다실행할거();

let 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});
