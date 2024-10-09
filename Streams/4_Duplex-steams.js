// Duplex Streams - These act as tunnel through which data passes from a Readable stream and goes to Writeable stream

const { PassThrough } = require('stream');
const fs = require('node:fs');

const readStream = fs.createReadStream('./largeFile.txt');
const writeStream = fs.createWriteStream('./output.txt');

const duplexStream = new PassThrough();

duplexStream.on('data', (data)=>{
    console.log(data.length);
});

readStream.pipe(duplexStream).pipe(writeStream);