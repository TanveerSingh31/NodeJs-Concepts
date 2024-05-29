// I/O QUEUE EXPERIMENTS
const fs = require('fs');

// This will add CB to "I/O Queue"
// After each CB, control will again go to "MICROTASK QUEUE" to check if there are any CB inside waiting to get executed
fs.readFile(__filename, ()=>{ 
    console.log("inside readFile CB1");       
    process.nextTick(()=>{ console.log("nextTick inside IO CB1") });
    setTimeout(()=>{ 
        console.log("timer inside IO Queue" );  // this will get picked in next iteration of Event Loop
    }, 0);
})

fs.readFile(__filename, ()=>{
    console.log("inside readFile CB2");
    process.nextTick(()=>{ console.log("nextTick inside IO CB2") });
})

fs.readFile(__filename, ()=>{
    console.log("inside readFile CB3");
})

fs.readFile(__filename, ()=>{
    console.log("inside readFile CB4");
})


setTimeout(()=>{ 
    console.log("inside Timer Queue" );
    Promise.resolve().then(()=>{ console.log("Promise inside setTimeout") });
}, 0);

// This will add CB to "process.nextTick Queue"
process.nextTick(()=>{ console.log("inside nextTick CB") });

// This will add CB to "Promise Queue"
Promise.resolve().then(()=>{ console.log("inside Promise CB") });

// ORDER
// "inside nextTick CB"
// "inside Promise CB"
// "inside Timer Queue"
// "Promise inside setTimeout"
// "inside readFile CB"
// "inside readFile CB1"
// "nextTick inside IO CB1"
// "inside readFile CB2"
// "nextTick inside IO CB2"
// "inside readFile CB3"
// "inside readFile CB4"

// "timer inside IO Queue"    <-- this got picked in next iteration of Event Loop