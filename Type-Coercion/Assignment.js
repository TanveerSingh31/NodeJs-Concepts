// Arithmetic Op.
console.log(5 + '5' - 3); // 52
console.log(true + false + 10); // 11


// Equality Op.
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(null > 0); // false

// Boolean Op.
console.log('hello' || 0 && 'world'); // 'hello'
console.log(0 && 'hello' || 'world'); // 'world'

// Object Coercion
console.log([] == ![]); // '' == false | true
console.log([] == false); // true
console.log('0' == false); // true

// Object coercion + Unary Operator
console.log(+[]); // [].toString() => '' => +'' (unary Operator) => 0
console.log(+[1, 2, 3]); // [1,2,3].toString() => +'1,2,3' => NaN
console.log(+['']);  // [''].toString() => +'' => ANS : 0
console.log(+['0']); // ['0'].toString() => +'0' => ANS: 0



console.log([] + {}); // [].toString() => '' + {}.toString() => '[object Object]' =>  ANS: '[object Object]'
console.log({} + []); // {} -> will be treated as block -> no effect => +[] => [].toString() => +'' => ANS:  0 
console.log([] == ![]); // '' == false | ANS: true


console.log(NaN == NaN); // false
console.log(NaN < NaN); // false
console.log(undefined == null); // true
console.log(undefined === null); // false



console.log([] + [] === [] + []);  
// '' === '' -> true