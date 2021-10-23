import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Brick from './brick.js';
import { buildLevel, level1 } from './levels.js';


export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start(){
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        new InputHandler(this.paddle);

        let bricks = buildLevel(this,level1);

        for(let i=0; i<10;i++){
            bricks.push(new Brick(this,{x:i*52 , y:20} ))
        }

        this.gameObjects = [this.paddle, this.ball, ...bricks];
    }

    update(deltaTime){
        this.gameObjects.forEach(object => {
            object.update(deltaTime);
        });
    }

    draw(context){
        this.gameObjects.forEach(object => {
            object.draw(context);
        });
    }

}