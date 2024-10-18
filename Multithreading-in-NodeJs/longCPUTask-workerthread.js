const { parentPort } = require('worker_threads');

parentPort.on('message', (data)=>{
    // CPU Intensive task
    for(let i=0; i<10000000000; i++){}

    // We can send the response of cpu task, to parent thread using this
    parentPort.postMessage(data);
});


