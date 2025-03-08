
// CPU Intensive task
function CPUIntensiveTask(){
    for(let i=0; i<10000000000; i++){}
}

// We can send the response of cpu task, using this method
process.on("message", (msg)=>{
    console.log("message from parent process = " , msg);
    CPUIntensiveTask();
    process.send(1000);
    process.exit(); 
})

// It is mandatory to kill child_process after completion of their task, 
// to avoid orphanded child_prcosses