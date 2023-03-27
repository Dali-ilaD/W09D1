

class MovingObject {
    constructor(option){
        this.pos = option.pos;
        this.vel = option.vel;
        this.radius = option.radius;
        this.color = option.color;
    }
    draw(ctx){
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill()
    }
    move(){
        for (let i = 0; i < this.pos.length; i++) {
            this.pos[i] += this.vel[i]
        }
    }
    
}




export default MovingObject;