function greet(name) {
    console.log(this);
    console.log(`Hello ${name}, This side ${this.name}`);
}

// Call method - helps in setting the context of "this" keyword to the object we provide
// Argument 1 - Will be the object that "this" will point to in greet fn.
// Remaining Arguments - will be passed on to the greet fn. as input args.

let obj = {name: 'Sample name'};
greet.call( obj,'Tanveer');