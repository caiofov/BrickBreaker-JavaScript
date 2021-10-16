import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
let ball = new Ball();

new InputHandler(paddle);
let lastTime = 0;

function gameLoop(timestamp){ //writing a function instead a loop makes it more efficient on slower computers
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    context.clearRect(0, 0, GAME_WIDTH, GAME_WIDTH); //cleans the screen
    paddle.update(deltaTime);
    ball.update();

    paddle.draw(context);
    ball.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop); //when the next frame is ready, the browser will call the next animation frame