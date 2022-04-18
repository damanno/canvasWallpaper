
const GAME_WIDTH = window.innerWidth-2;
const GAME_HEIGTH =  window.innerHeight-2;

var dynamicCanvas = document.createElement('canvas');
dynamicCanvas.id = "gameScreen";
dynamicCanvas.height = GAME_HEIGTH;
dynamicCanvas.width = GAME_WIDTH;

var body = document.getElementsByTagName("body")[0];
body.appendChild(dynamicCanvas);

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

let oi = new Square(GAME_WIDTH, GAME_HEIGTH);
oi.draw(ctx);

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGTH);   
    oi.update(deltaTime);
    
    oi.draw(ctx);
    requestAnimationFrame(gameLoop)
}

gameLoop();

