


process.on('message', (msg)=>{

    console.log(msg);

    for(let i=0; i<1000000000000000; i++){    
    }
    
    process.send('this is data from process');
    process.exit();
})





