export class Chime {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.angle = 0;
        this.speed = speed;
    }
    
    update() {
        // this.speed *= 0.99;
        // this.angle += this.speed;
        // if (this.speed < 0.001) {
        //     this.speed = 0;
        // }

        // 向右偏 → 往左拉
        // 向左偏 → 往右拉
        // 正中间 → 不产生回复力
        // 回复力
        this.speed += -Math.sin(this.angle) * 0.01;
        this.speed *= 0.99;
        this.angle += this.speed;
    }

    draw(ctx) {
        const swing = Math.sin(this.angle) * 100;
        const currentX = this.x + swing;

        ctx.beginPath();
        ctx.moveTo(this.x, this.y - 100);
        ctx.lineTo(currentX, this.y);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(
            currentX,
            this.y,
            20,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "green";
        ctx.fill();
    }

    /**
     * 鼠标是否点击到风铃
     * @param {*} mouseX 
     * @param {*} mouseY 
     * @returns 
     */
    isHit(mouseX, mouseY) {
        const swing = Math.sin(this.angle) * 50;
        const currentX = this.x + swing;

        const dx = mouseX - currentX;
        const dy = mouseY - this.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        return distance < 20;
    }
}