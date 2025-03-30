class Parent {

    name;

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }

};


class Child extends Parent {
    
    age;

    constructor(name, age) {
        super(name)
        this.age = age;
    }

    ChildGreet() {
        console.log(`Hello ${this.name} ${this.age}`);
    }

}

// Inheritance Chain

// childObj.__proto__ == Child.prototype 
//  -> childObj.__proto__.__proto__ == parentObj.__proto__ == Parent.prototype 
//      -> Object.prototype
//          -> null


let childObj = new Child('Tanveer', 24);

childObj.ChildGreet()
console.log(childObj);

console.log(Object.getOwnPropertyNames(Child.prototype));
console.log(childObj.__proto__, Child.prototype); // Child.prototype

console.log(Object.getOwnPropertyNames(Parent.prototype));
console.log(childObj.__proto__.__proto__, Parent.prototype) // Parent.prototype
