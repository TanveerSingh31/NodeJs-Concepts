// Parent constructor fn.
function Parent(name) {
    this.name = name;
}

Parent.prototype.sayHello = function() {
    console.log("Hello, " + this.name);
};

// Child constructor fn.
function Child(name, age) {
    Parent.call(this, name); // it will set properties on the Child object itself
    this.age = age;
}

let kid = new Child("Tanveer", 10);


console.log("1. ", kid.__proto__); // point to Child.prototype

// Inherit prototype methods
Object.setPrototypeOf(Child.prototype, Parent.prototype);
// Child.prototype.constructor = Child;

console.log("2. ", kid.__proto__); // points to Parent.prototype

kid.sayHello(); // "Hello, Tanveer"