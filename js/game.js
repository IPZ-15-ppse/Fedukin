const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;

let food = {
  x: Msth.floor((Math.random() * 17 + 1)) * box,
  y: Msth.floor((Math.random() * 15 + 1)) * box,
};

let snake = [];
snake[0] = {
	x: 9 * box;
	y: 10 * box;
}

function drawGame() {
    ctx.drawImage(background, 0, 0);

	ctx.drawImage(foodImg, food.x, food.y);

	for(let i = 0; i< snake.length; i++) {
		ctx.fillStyle = "black";
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
	}

	ctx.fillStyle = "white";
	ctx.font = "50px Arial";
	ctx.fillText(score, box * 2.5, box * 1.7);

	let snakeX = snake[0].x;
  	let snakeY = snake[0].y;

	if(snakeX == food.x && snakeY == food.y) {
    score++;
    food = {
      x: Math.floor((Math.random() * 17 + 1)) * box,
      y: Math.floor((Math.random() * 15 + 3)) * box,
    };
  } else {
    snake.pop();
  }

  if(snakeX < box || snakeX > box * 17
    || snakeY < 3 * box || snakeY > box * 17)
    clearInterval(game);

  if(dir == "left") snakeX -= box;
  if(dir == "right") snakeX += box;
  if(dir == "up") snakeY -= box;
  if(dir == "down") snakeY += box;

  let newHead = {
    x: snakeX,
    y: snakeY
  };


}

let game = setInterval(drawGame, 100);
