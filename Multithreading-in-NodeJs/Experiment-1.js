const express = require('express');

const app = express();



app.get('/slow-route', async (req, res, next)=>{
    let number = await getNumber();
    res.send({
        number 
    });
})


app.get('/', (req, res, next)=>{
    res.send('faster route');
});


async function getNumber() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            for(let i=0; i<10000000000; i++){}
            setTimeout(()=>resolve(10), 5000);
        }, 5000); 
    })
}



app.listen(3000, ()=>{
    console.log('server started on 3000');
})