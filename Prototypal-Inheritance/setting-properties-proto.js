let obj = {
    a: 1,
    b: 2
}

// No changes will be made to the parent object
// Setting properties in child object will create properties in the child object itself.

let obj2 = Object.create(obj);

console.log(obj2.a); // 1

obj2.a = 100;

console.log(obj2.a); // 100 -> new property created in obj2 itself.