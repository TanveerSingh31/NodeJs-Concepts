// Transform Stream
// Special kind of stream, that modifies the data passing through it
// _transform() fn. will contain custom logic to modify the chunk

const { Transform, pipeline } = require('node:stream');
const fs = require('node:fs');

const readStream = fs.createReadStream('./largeFile.txt');
const writeStream = fs.createWriteStream('./output.txt');


class UpperCase extends Transform {

    constructor() {
        super();
    }

    // will be called for each chunk of data passed to Transform Stream
    _transform(data, encoding, next) {
        let transformedData = data.toString().toUpperCase(); // Transform the chunk of data recieved
        this.push(transformedData); // passes transformed chunk to next stream in sequence (Write stream in this case)
        next(); // callback fn. , to signal the stream we are ready to process the next chunk
    }
};


const transformStream = new UpperCase();


pipeline(
    readStream, 
    transformStream,
    writeStream,
    (err) => {  
        if(err) {
            console.log(err);
        }
        else{
            console.log('streaming done!');
        }
    }
)