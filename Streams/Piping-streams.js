const fs = require('node:fs');
const {pipeline} = require('node:stream');

const reader = fs.createReadStream('./largeFile.txt');
const writer = fs.createWriteStream('./output2');

// Method - 1
// Piping helps us not to add any event listeners to streams
// Automatically data will move from src to dest using streams
reader.pipe(writer);

writer.on('error', (err)=> console.log(err));


// Method - 2
// Add all streams in sequence to pipeline fn.
pipeline(
    reader,
    writer,
    (err) => {
        if (err) {
          console.error('Pipeline failed.', err);
        } else {
          console.log('Pipeline succeeded.');
        }
    },
);