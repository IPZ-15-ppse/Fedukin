const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/background.png";

const food = new Image();
food.src = "img/carrot.png";

let box = 32;

let score = 0;

let food = {
  x: Msth.floor((Math.random() * 17 + 1)) * box,
  y: Msth.floor((Math.random() * 15 + 1)) * box,
};

function drawGame() {
    ctx.drawImage(background, 0, 0);
}

let game = setInterval(drawGame, 100);
