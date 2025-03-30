let parentObj = {
    name: 'Tanveer',
    age: 23,
    greet() {
        console.log(`Hello this is ${this.name}`);
    }
};


let childObj = Object.create(parentObj);



console.log(childObj); // empty
console.log(childObj.__proto__); // parentObj


// __proto__ => 
// Property of an object, that indicates which obj it is inherited from ?
// It can be Object / null
// JS when trying to access properties / methods tries to access in the current object, if not found, tries it in the obj. it is inherited from and so on...  until null is encountered.
// If we try to set any property -> that will set in the current object only.


let originalObj = {
    name: "Tanveer",
    getName() {
        return this.name;
    }
}

let childObj1 = Object.create(originalObj);

console.log(childObj1.name); // tries to access property of parent obj
console.log(childObj1.getName()); 


let childObj2 = {
    name1: 10000,
    __proto__: originalObj
}

let childObj3 = {
    __proto__: childObj2
}

console.log(childObj3.name);  // Tanveer - accessed from originalObj
console.log(childObj3.name1); // 10000 - accessed from childObj2


