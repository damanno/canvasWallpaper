class Square {

    constructor(gameWidth, gameHeight) {
        this.width = 60;
        this.height = 28;
        this.speed = 50;
        this.operatorX = 1;
        this.operatorY = 1;
        this.position = {
            x: 1,
            y: 1,
        };

        this.newImage = new Image();
        this.newImage.src = 'point.png';
          
        
    }

    draw(ctx) {
        
        ctx.fillStyle = '#f00';
        ctx.drawImage(this.newImage, this.position.x, this.position.y, this.width, this.height);
    }


    update(deltaTime) {
        
        
        if (!deltaTime) return;
        if (this.position.x < 0 || this.position.x > GAME_WIDTH - this.width) {
            this.operatorX = this.operatorX * -1;
        }
        if (this.position.y < 0 || this.position.y > GAME_HEIGTH - this.height) {
            this.operatorY = this.operatorY * -1;

        }
        this.position.x = this.position.x + (this.operatorX * (this.speed / deltaTime));
        this.position.y = this.position.y + (this.operatorY * (this.speed / deltaTime));
        
    }



}