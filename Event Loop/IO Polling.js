// I/O polling is done, to check if I/O operation is completed
// If they are completed, only then CB's are added to "IO Queue"
const fs = require('fs');

// Will add CB in "Timer Queue"
setTimeout(()=>{ 
    console.log("inside Timer Queue" );
    Promise.resolve().then(()=>{ console.log("Promise inside setTimeout") });
}, 0);

// This will not add CB in IO Queue, before polling is done, 
// Since, Polling is done after the IO Queue, only after we have passed the IO Queue, the CB will be added to it , if polling returned yes the IO operation is completed. 
// Will add CB in "IO Queue"
fs.readFile(__filename, ()=>{
    console.log("inside readFile CB4");
})

// Will add CB in "Check Queue"
setImmediate(()=> console.log("inside Check Queue CB1"));


// ORDER 
// "inside Timer Queue" 
// "Promise inside setTimeout"
// "inside Check Queue CB1"   <-- this got first executed, because polling happened after passing IO queue, and since IO queue was initially empty, we directly went to Check Queue
// "inside readFile CB4"   <-- This got picked in next Iteration of Event Loop