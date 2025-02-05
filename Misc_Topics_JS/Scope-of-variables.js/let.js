// let - Block scoped
// Scope only within the braces it is declared
// Hoisted but NOT initialized with any values

// Temporal Dead Zone (TDZ) - period b/w start of scope and declaration of variable, if we access variable b/w this zone it results in error


function test() {
    console.log(a); // TDZ error
    let a = 100;
}
// test();


if(false) {
    let b = 100;
}

console.log(b); // error, as it is defined only within block scope