// Data Manipulation methods for Buffer.

const { log } = require("console");


// 1. Concat

let buffer1 = Buffer.from('Hello');
let buffer2 = Buffer.from('World');
let buffer3 = Buffer.from('buffer');
let bufferCombined = Buffer.concat([buffer1, buffer2, buffer3]); // concat multiple buffers

console.log(bufferCombined.toString());



// 2. Slice

let bufferSlice1 = Buffer.from('Tanveer Singh');
let bufferSliced = bufferSlice1.slice(0, 7);

console.log(bufferSliced.toString());


// 3. includes , indexOf
console.log(bufferSlice1.includes('Tan'));
console.log(bufferSlice1.indexOf('Tan'));



// 4. Copy - copies source buffer to destination

let buf = Buffer.alloc(10);
bufferSlice1.copy(buf);

console.log(buf.toString());

