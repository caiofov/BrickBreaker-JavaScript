export default class Brick{

    constructor(game, position){
        this.image = document.getElementById("brick");
        this.size = 30;
        
        this.position = position;
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;

        this.width = 80;
        this.height = 24;
    }

    update(){

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