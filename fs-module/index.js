let fs = require('node:fs');


console.log(1);

// "Async" method to read file content.
fs.readFile('./file1.txt', 'utf-8', (err, data)=>{
    console.log(err);
    console.log(data);
})

console.log(2);
