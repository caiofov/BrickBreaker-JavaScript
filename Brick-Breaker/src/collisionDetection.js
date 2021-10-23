export default function detectCollision(ball, gameObject){
    //ball edges
    let ballTop = ball.position.y;
    let ballBottom = ball.position.y + ball.size;
    let ballLeft = ball.position.x;
    let ballRight = ball.position.x + ball.size;
    
    //game object edges
    let gameObjectTop = gameObject.position.y;
    let gameObjectLeft = gameObject.position.x;
    let gameObjectRight = gameObject.position.x + gameObject.width;
    let gameObjectBottom = gameObject.position.y + gameObject.height;

    //checking collision
    let topCollision = (ballBottom >= gameObjectTop);
    let bottomCollision = (ballTop <= gameObjectBottom)
    let leftCollision = (ballRight >= gameObjectLeft);
    let rightCollision = (ballLeft <= gameObjectRight);

    return (topCollision && bottomCollision && leftCollision && rightCollision);
    
}