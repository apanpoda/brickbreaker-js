
class Paddle {
    constructor(x, y, width, height, color) {
        this.x = paddleX;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        colorRect(paddleX, paddleY, paddleWidth, paddleHeight, this.color);
    }
}