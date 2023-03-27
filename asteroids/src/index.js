console.log("Webpack")

import MovingObject from "./moving_object.js"
window.MovingObject = MovingObject


//when you define a variable in index, you also need to apply the variable on the window
const test = new MovingObject ({
    pos: [10,10],
    vel: [5, 5],
    radius: 5,
    color: "#00FF00"
    

})
//applying variable on the window, can interact with on the browser console
window.test = test
console.log(test)

const c = document.getElementById("game-canvas");
const ctx = c.getContext("2d")

test.draw(ctx)