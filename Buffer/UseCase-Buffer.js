let fs = require('fs');

let txtReadStream = fs.createReadStream(__dirname + '/sample.txt', { highWaterMark: 10});

txtReadStream.on('data', (data)=>{
    // Each chunk of data is stored in Buffer
    console.log(data);
    console.log(data.length);
    console.log(data.toString());
});