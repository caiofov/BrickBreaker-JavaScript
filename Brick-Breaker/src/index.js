import Paddle from './paddle.js';
import InputHandler from './input.js';

let canvas = document.getElementById("gameScreen");

let context = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let paddle = new Paddle(GAME_WIDTH,GAME_HEIGHT);
paddle.draw(context);

let lastTime = 0

function gameLoop(timestamp){ //writing a function instead a loop makes it more efficient on slower computers
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    
    context.clearRect(0,0,800,600); //cleans the screen
    paddle.update(deltaTime);

    paddle.draw(context);

    requestAnimationFrame(gameLoop); //when the next frame is ready, the browser will call the next animation frame
}

gameLoop();