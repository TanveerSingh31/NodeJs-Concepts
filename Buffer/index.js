let buffer = Buffer.from("Tanveer");

console.log(buffer); // hexadecimal represenation of the ascii char's of the original string
console.log(buffer.toJSON()); // returns JSON format of the buffer object, type & data (ascii)
console.log(buffer.toString()); // converts the buffer data to string


let bufferNew = Buffer.alloc(2); // "alloc" - creates 0 initialized buffer of size 2 bytes
console.log(bufferNew);

bufferNew.write('tanveer'); // writing to existing buffer
console.log(bufferNew.toString()); 
// Since, we were writing to a buffer of size 2 Bytes, while writing it trucated the remaining string. 


let bufferNewFast = Buffer.allocUnsafe(10); // "allocUnsafe" - create non-initialized buffer of size 10 bytes, faster Allocation.
console.log(bufferNewFast);

bufferNewFast.write('tanveersingh');
console.log(bufferNewFast.toString());









