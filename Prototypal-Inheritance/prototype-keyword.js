// prototype property on functions stores an object {} , 
// that all object created using this constructor function will inherit from
// This Object can be accessed from child obj's via __proto__ keyword.  

function sample() {

}

sample.prototype = { a: 1, b: 2}  

// NOTE - 
// This object will now be available inside the __proto__ property of objects created of this fn.
// Child objects will inherit from this prototype object.


let s1 = new sample();
let s2 = new sample();

console.log(s1);
console.log(s1.__proto__); // prototype object
console.log(s2.__proto__); // prototype object
