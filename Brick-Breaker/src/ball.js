export default class Ball{
    constructor(game){
        this.image = document.getElementById("ball");
        this.size = 16;
        
        this.speed = {x:4, y:2};
        this.position = {x:10, y:10};
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
    }

    draw(context){
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        
        //checks collisions

        //left or right
        if(this.position.x > this.gameWidth - this.size || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }

        //top or bottom
        if(this.position.y > this.gameHeight - this.size || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        //paddle
        let ballBottom = this.position.y + this.size;
        let ballLeft = this.position.x;
        let ballRight = this.position.x + this.size;
        
        let paddle = this.game.paddle;
        let paddleTop = paddle.position.y;
        let paddleLeft = paddle.position.x;
        let paddleRight = paddle.position.x + paddle.width;

        let insideTop = (ballBottom >= paddleTop);
        let insideLeft = (ballLeft >= paddleLeft);
        let insideRight = (ballRight <= paddleRight)

        //top collision
        if(insideTop && insideLeft && insideRight){
            this.speed.y = -this.speed.y;
            this.position.y = paddleTop - this.size;
        }

        // //left collision
        // else if(insideLeft && !(insideRight) && insideTop){
        //     this.speed.y = -this.speed.y;
        //     this.speed.x = -this.speed.x;

        //     this.position.x = paddleRight;
        // }

        // //right collision
        // else if(insideRight && !(insideLeft) && insideTop){
        //         this.speed.y = -this.speed.y;
        //         this.speed.x = -this.speed.x;

        //         this.position.x = paddleLeft - this.size;


        // }

    }
}