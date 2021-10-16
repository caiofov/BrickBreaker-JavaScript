export default class Paddle {
    constructor(gameWidth, gameHeight){
        this.width = 150;
        this.height = 30;

        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeed = 7;
        this.speed = 0;

        this.position = {
            x: gameWidth / 2 - this.width /2,
            y: gameHeight - this.height - 10,
        }
    }

    draw(context){
        console.log("X= ", this.position.x, " Y= ", this.position.y, " w= ",this.width," h = ", this.height);

        context.fillStyle = '#0ff'
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }


    update(deltaTime){
        if(!deltaTime){ //if there is no deltatime (at the beggining of the game)
            return
        }
        this.position.x += this.speed;

        //setting limits
        if(this.position.x < 0 ){ 
            this.position.x = 0
        }
        if(this.position.x + this.width > this.gameWidth){ 
            this.position.x = this.gameWidth - this.width
        }
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }
    moveRight(){
        this.speed = this.maxSpeed;
    }
}