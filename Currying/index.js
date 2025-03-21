// Currying - Concept in JS, where function that accepts multiple arguments is transformed in multiple function with single argument.


// Example - add(1,2) -> add(1)(2);


function add(num) {
    return (num2) => {
        if(!num2) return num;
        return num + num2;
    }
}


console.log(add(1)(2));
console.log(add(1)());