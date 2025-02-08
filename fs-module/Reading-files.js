let fs = require('node:fs');

console.log(1);

// Note : All callbacks for fs functions go to I/O Queue


// 1. Methods for reading file content. (Both are async methods)

// 1. "Async" method to read file content.
// readFile, loads the entire file at once, increasing the memory consumption of the application !
fs.readFile('./Files/large_text_file_100mb.txt', 'utf-8', (err)=>{
    console.log(err);
})

// 2. "ReadStream" - reads the file chunk by chunk , and simultaneously writes somewhere else
// This reduces the memory usage.
let readStream = fs.createReadStream('./Files/large_text_file_100mb.txt');
let writeStream = fs.createWriteStream('./Files/output.txt')
readStream.pipe(writeStream);


console.log(2);
