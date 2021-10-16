import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Game from './game.js';

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let context = canvas.getContext("2d");

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();


let lastTime = 0;

function gameLoop(timestamp){ //writing a function instead a loop makes it more efficient on slower computers
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    context.clearRect(0, 0, GAME_WIDTH, GAME_WIDTH); //cleans the screen
    game.update(deltaTime);
    game.draw(context);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop); //when the next frame is ready, the browser will call the next animation frame