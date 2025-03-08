// Article - https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/
// Boolean Corecion

// Triggered by logical operators - ( || , &&, ! )
// These operators convert the operands to Boolean
// && , || =>  Internally convert the operands to boolean, but return the original value of operands only


// IMP!!
// Falsy Values - Rest All Values are TRUTHY , that are not in the list.

// 0, -0, '', null, undefined, false, NaN

// Remember these Values !!

// Boolean('')           // false
// Boolean(0)            // false     
// Boolean(-0)           // false
// Boolean(NaN)          // false
// Boolean(null)         // false
// Boolean(undefined)    // false
// Boolean(false)        // false




let x = 1; // Truthy
let y = "str"; // Truthy
let z = []; // Truthy
let a = {}; // Truthy
let b = ''; // Falsy
let c = 0; // Falsy


console.log(x && y); // "str"
console.log(c && y); // 0
console.log(z || y); // []
console.log(a || y); // {}
console.log(b || y); // "str"




