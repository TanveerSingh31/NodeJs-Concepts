// In JS, Objects can be inherit other objects using following methods

// 1. Object.create(obj) - creating obj using another obj
// 2. obj2.__proto__ = parent_obj - inheriting using __proto__ property



// 1. __proto__ => 
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






















