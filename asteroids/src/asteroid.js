import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = '#808080';
    constructor(options){

        
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        options.vel = Util.randomVec()
        super(options)
    }
}


export default Asteroid;