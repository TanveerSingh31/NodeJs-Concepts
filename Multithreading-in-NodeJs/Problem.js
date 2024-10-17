const express = require('express');
const app = express();


// The problem here is, only 1 nodejs instance is running
// If any API has sync. CPU intensive task, it will block the nodejs instance (blocks the event loop) and won't allow any other request to be served unless it is completed
// This is problematic, and is hinderance in scaling application.

app.get('/', (req, res, next)=>{
    res.send({'data': 'from a fast API'});
});

// CPU intensive API
app.get('/slow-route', (req, res, next)=>{
    
    // If code is synchronous, and is CPU intensive
    // This will occupy the call stack for long time & won't let any other request to get served
    // It will block the event loop

    for(let i=0; i<100000000000; i++){}

    res.send({'response from slow route': 1});
});



app.listen(5500, ()=>{
    console.log('server started on port = 5500');
})