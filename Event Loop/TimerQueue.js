// TIMER QUEUE EXPERIMENTS

// NOTE: V.IMP !!
// After Execution of each CB inside Timer Queue
// Event loop goes to check , are there any CB inside MICROTASK QUEUE
// if there are , all CB's inside MICROTASK QUEUE will get executed before execution comes back again to TIMER Queue

setTimeout(()=>{ console.log("setTimeout 1")}, 0);
setTimeout(()=>{ 
    console.log("setTimeout 2");
    process.nextTick( () => { console.log("nextTick inside setTimeout") });  
}, 0);
setTimeout(()=>{ console.log("setTimeout 3")}, 0);


// EXPECTED O/P
// "setTimeout 1"
// "setTimeout 2"
// "nextTick inside setTimeout" , as the control goes to MICROTASK QUEUE
// "setTimeout 3"


process.nextTick(()=> { console.log(1)});
process.nextTick(()=> {
    process.nextTick(()=> { console.log("nextTick inside nextTick")});  // this will add the CB at end of nextTick queue
    console.log(2);
});
process.nextTick(()=> { console.log(3)});


Promise.resolve().then(()=>{ console.log("promise 1") });
Promise.resolve().then(()=>{ 
    // this will add CB to "nextTick Queue", but the control will still remain inside "Promise Queue", until all CB's of promise queue are completed
    process.nextTick(()=>{ console.log("nextTick inside promise") });  
    console.log("promise 2");
});
Promise.resolve().then(()=>{ console.log("promise 3") });