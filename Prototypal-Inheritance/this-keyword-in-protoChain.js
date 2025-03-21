// How does "this" keyword behave in proto-chaining

// "this" will point to the obj before the "." => and will access that object only

let animal = {
    walk() {
        if (!this.isSleeping) {
            alert(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep(); // will create property inside "rabbit" obj.

console.log(rabbit); // isSleeping property added in rabbit obj.
console.log(animal.isSleeping); // undefined (no such property in the prototype)

