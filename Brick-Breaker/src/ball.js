export default class Ball{
    constructor(gameWidth, gameHeight){
        this.image = document.getElementById("ball");
        this.size = 16;
        
        this.speed = {x:2, y:2};
        this.position = {x:10, y:10};
        
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    draw(context){
        context.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if(this.position.x > this.gameWidth - this.size || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }
        if(this.position.y > this.gameHeight - this.size || this.position.y < 0){
            this.speed.y = -this.speed.y;
        }
    }
}