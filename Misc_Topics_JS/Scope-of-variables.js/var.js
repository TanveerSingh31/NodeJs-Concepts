// Function scope - var
// 1. if variable declared inside fn. will be hoisted on top of the fn.
// 2. if declared outside a fn. will be hoisted on top of global scope
// 3. It will ignore block scopes such as - if, for, while 
// 4. Hoisted, and assigned with "undefined"


// Block scope - let, const
// 1. scope only within the curly braces, within which declared (if, for, while)
// 2.  

// ----------------------------------------------------

// 1. var - function scoped (if not declared inside a fn. then global scope)

if(false) {
    var a = 100;
}
console.log(a); // no error, because , it will be hoisted at top as "var" is function scoped, and ignore the if block scope



function sample() {    
    console.log(b) // doesnot give error, because during compile phase it will hoist "b" to top of function
    var b = 200;
}
sample();
console.log(b) // Error, because, it is function scoped, means it is hoisted inside the sample function , and not global because this time it is declared inside a function 