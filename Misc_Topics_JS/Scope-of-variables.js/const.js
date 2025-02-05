// const - Block scoped


// error because, const variable need to be initialized at time of declaration
// const a; 

if(true) {
    console.log(b); // TDZ - error
    const b = 100;

    b = 300; // cannot reinitalize
}

// error - because it is defined inside block , and we are accessing outside the block
console.log(b);

