import detectCollision from "./collisionDetection.js";

export default class Brick{

    constructor(game, position){
        this.image = document.getElementById("brick");
        this.size = 30;
        
        this.position = position;

        this.game = game;

        this.width = 80;
        this.height = 24;

        this.markedForDeletion = false;
    }

    update(){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
        }
    }
    draw(context){
        context.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )

    }
}