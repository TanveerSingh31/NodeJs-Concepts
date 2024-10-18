const {isMainThread, Worker} = require('worker_threads');
const express = require('express');
const app = express();



app.get('/slow-route', (req, res, next) => {
    if(isMainThread) {
        // CPU intensive task offloaded to worker thread
        const worker1 = new Worker('./longCPUTask-workerthread.js');
        worker1.postMessage(req.query.val); // postMessage method can be used to send data between Main thread and worker threads

        worker1.on('message', (data)=>{
            res.send({ data });
        });
    }
});

// No impact on response of this, as the main thread is not blocked
app.get('/', (req, res, next)=>{
    res.send({'response from fast route': 123});
})




app.listen(4000, ()=>{
    console.log('server started on 4000');
})


