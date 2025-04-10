// JS copies the objects by reference.

// Some methods to copy the object by values in JS.


/*

Methods

1. JSON.parse(JSON.stringify(obj))
2. Custom Recursive function
3. structureClone(obj)

*/



let parentObj = {
    a: 1000,
    b: 2000
} 

// 1. JSON.parse(JSON.stringify())
let childObjJSONParse = JSON.parse(JSON.stringify(parentObj));

childObjJSONParse.a = 1;

console.log(childObjJSONParse);
console.log(parentObj);



// 2. stucturedClone()
let childObjStructured = structuredClone(parentObj);

childObjStructured.a = 99;

console.log(childObjStructured);
console.log(parentObj);
