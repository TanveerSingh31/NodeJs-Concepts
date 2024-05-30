// CLOSE QUEUE EXPERIMENTS

const fs = require('fs');

let readableStream = fs.createReadStream(__filename);

readableStream.on("close", ()=>{
    console.log("Close Queue CB1");
    process.nextTick(()=> console.log("nextTick inside Close"));
    Promise.resolve().then(()=> console.log("promise inside Close"));
});
readableStream.on("close", ()=>{
    console.log("Close Queue CB2");
});

readableStream.close();

setTimeout(()=> console.log("timer CB"), 0);
setImmediate(()=> console.log("IO CB"));



// NOTE:
// All CB's of CLOSE Queue will get executed first only then it will move to MICROTASK Queue
// It will NOT go to MICROTASK Queue after each CB of CLOSE Queue.