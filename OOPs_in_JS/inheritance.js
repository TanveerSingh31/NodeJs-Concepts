class Shape {

    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
}




class Square extends Shape {

    constructor(sideLength) {
        super('square', 4, sideLength); // super keyword - calls the parent class constructor
    }

    calcArea() {
        let squareArea = this.sideLength * this.sideLength;
        console.log('Area of square = ', squareArea);
    }
}


let sq1 = new Square(10);

console.log(sq1.name);
console.log(sq1.sides);
console.log(sq1.calcArea());
console.log(sq1.sideLength);

console.log(sq1.__proto__.name);







