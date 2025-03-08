// V. IMP !!!!!
// Numeric Coercion - Implicit


// 1. Comparison Operators -> ( <, >, <=, >= ) : returns boolean value
console.log(4 > '5');
console.log(true > 0 < '5');
console.log(4 > '');

console.log("-----------------------------")



// 2. Bitwise Operators -> ( |, &, ^, ~ )





// 3. Arithmetic Operators -> ( +, -, %, /, * )

// Note !!! 
// for (+) operator , The Result gets converted to string, If any operands is "String", even EMPTY string !!!!!!

console.log(1+2+"4"); // 34
console.log(1-"2"); // -1
console.log(5/null); // Infinity
console.log(5/undefined); // Infinity

console.log("-----------------------------")



// 4. Unary Operator -> (+) : returns Number

console.log(+"");
console.log(+0);
console.log(+"4");

console.log("-----------------------------")



// IMP !!! 
// 5. Equality Operators -> ( == , != )
/* Note -
 
    1.These don't convert to number, if any operand is string (NOT - EMPTY string)
    
    2.Incase of null or undefined, it doesnot convert to number
      (null == undefined) OR (null == null)
    
    3. "NaN" not equal to anyone , not itself as well.

*/


console.log(null == 0);
