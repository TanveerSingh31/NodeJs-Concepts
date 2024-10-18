const app = require('express')(); 
const { fork } = require('child_process');


app.get('/', (req, res, next)=>{
    res.send({'data': 'from a fast API'});
});

// CPU intensive API
app.get('/slow-route', (req, res, next)=>{
    
    // CPU Intensive task if offloaded to child_process, and event handler is attached to it
    // whenever, we get data from child_process we return the response
    // Meanwhile, the main thread is not blocked, and can process other requests 
    
    const childProcess = fork('./longCPUTask-childprocess.js');
    childProcess.send(1); // sending data to child_process
    childProcess.on("message", (message)=>{
        res.send({'response from slow route': message});
    });
});



app.listen(5500, ()=>{
    console.log('server started on port = 5500');
})