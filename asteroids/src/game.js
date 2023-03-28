import Asteroid from "./asteroid";
import randomVec from "./utils";

class Game {
    static DIM_X = 600;
    static DIM_Y = 300;
    static NUM_ASTEROIDS = 7
    constructor(){
        this.asteroids = this.addAsteroids

    }
    addAsteroids(){
        const asts = []
        for (let i = 0; i <= NUM_ASTEROIDS; i++) {
            pos = [this.randomPosition(600), this.randomPosition(300)];
            let ast = new Asteroid(pos);
            asts.push(ast);
        }
        return asts;
    }
    
}

Game.prototype.randomPosition = function(max){
    return Math.random() * max;
}


Game.prototype.draw= function(ctx) {
    clearRect(0,0,600,300);
    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx);
    });
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(asteroid =>{
        asteroid.move();
    });
}


