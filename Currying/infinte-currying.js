// Infinite Currying -> 

// add(1)(2)(3)(4).....



function add(num) {
    return function(num2) {
        if(!num2) return num;
        return add(num+num2);
    }
}

console.log(add(1)(2)(3)()); 
console.log(add(1)(2)(3)(4)(5)(6)());