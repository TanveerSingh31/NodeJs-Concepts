let parent100 = {
    greet() {
        console.log("Hello from parent!");
    }
};

let child100 = {};
Object.setPrototypeOf(child, parent);



console.log(child100.__proto__ == parent100);