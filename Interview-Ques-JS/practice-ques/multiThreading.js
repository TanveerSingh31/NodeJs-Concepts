let { fork } = require('node:child_process');
let fs = require('node:fs');
const app = require('express')();

app.get('/result', (req, res, next) => {
    res.send("123123");
})

app.get('/slow', (req, res, next)=>{
    const childProcess = fork('./file1.js');

    childProcess.send(1);

    childProcess.on('message', (data) => {
        console.log("data" , data);
        
        res.send({data});
    });
})




app.listen(1000, ()=>{
    console.log("server started on 6000");
})
