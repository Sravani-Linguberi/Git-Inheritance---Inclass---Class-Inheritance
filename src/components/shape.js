// // declare class
// Acceptance Criteria

// Create a base class called "Shape" with methods drawShape, calculateArea and color property that is initialised with a color.

// In another module make a class called "Circle" that extends the "Shape" class and overrides the calculateArea method.

// Write code for Shape class in shape.js and Circle in circle.js
// // export class using module.exports


class shape { // es6 export way
    constructor() {
        this.color = "red";
    }
    drawShape() {
        console.log("Draw a shape");
    }
    calculateArea() {
        console.log("don't know area of unknown shape");
        return ;
    }
    
}
module.exports = shape;
 
//