const fs = require('node:fs');

const readStream = fs.createReadStream('./largeFile.txt');
const writeStream = fs.createWriteStream('./output.txt');

// option-1: writing data chunk by chunk on 'data' event
readStream.on('data', (data) => {
    writeStream.write(data);
})


// IMP NOTE: 
// write() fn. return boolean val, which represents whether it can take more data at the moment or not
// if True, we can use write fn. to write more data
// if False, 'drain' event will be emitted to drain the current data first, before taking in more data


readStream.on('data', (data)=>{
    let canMoreDataBeInserted = writeStream.write(data);
    if(!canMoreDataBeInserted){
        // pause read stream , because write stream can't take in more data at the moment
        readStream.pause();
    }
})


// NOTE: 'drain' event will get emitted when writeStream can't write anymore

writeStream.on('drain', ()=>{
    // will get executed , when write stream is ready to take in more data
    readStream.resume();
})


writeStream.on('end', ()=>{
    writeStream.end();
})


