// Q-1
const obj = {
    name: "Alice",
    arrowFn: () => {
      console.log(this.name);
    },
    regularFn: function () {
      console.log(this.name);
    }
  };
  
  obj.arrowFn();  // -> undefined
  obj.regularFn(); // -> Alice



// Q-2

function Test() {
    this.name = "Test";
  
    setTimeout(function () {
      console.log(this.name); // 
    }, 1000);
  
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
  
new Test();

// undefined
// Test

// Because, when arrow fn was declared, this -> Test obj. and arrow fn. inherited it, whereas when normal fn. was called , it was called from global scope -> undefined 



// Q-3

const obj3 = {
    name: "Bob",
    sayName: function () {
      const arrowFn = () => {
        console.log(this.name);
      };
      arrowFn();
    }
  };
  
obj3.sayName(); // Bob





// Q-4

const obj1 = {
    name: "Charlie",
    arrowFn: () => {
      console.log(this.name);
    }
  };
  
const obj2 = { name: "David" };
  
const boundFn = obj1.arrowFn.bind(obj2);
boundFn(); // undefined, no effect of bind




// Q-5

class Person {
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      setTimeout(function () {
        console.log(`Hello, my name is ${this.name}`);
      }, 1000);
    }
  
    sayHelloArrow() {
      setTimeout(() => {
        console.log(`Hello, my name is ${this.name}`);
      }, 1000);
    }
}
  
const p = new Person("Eve");
p.sayHello();      // -> undefined: normal fn. will need any to be called from obj to point to it.
p.sayHelloArrow(); // -> Eve: Arrow fn. will inherit it during declaration itself and set this to it.