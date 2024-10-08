// Streams are a way for transfering data from 
// source to destination , without taking much memory in process
const fs = require('node:fs');

// Spike in memory observed !
// data will use 200MB RAM at once, and then write it to destination file
let data = fs.readFileSync('./largeFile.txt', 'utf-8');
fs.writeFileSync('./writeLargeFile.txt', data, (err)=>{
    console.log(err);
});


// No Spike in memory observed !
// Using streams : no spike in memory as data is transfered in Chunks
let readStream = fs.createReadStream('./largeFile.txt');
let writeStream = fs.createWriteStream('./largeFileStream.txt');

readStream.on('data', (data)=>{
    console.log(data.length); // chunk size
    writeStream.write(data);
})



