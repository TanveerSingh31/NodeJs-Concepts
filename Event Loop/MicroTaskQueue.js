// MICROTASK QUEUE EXPERIMENTS


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



// after "Promise Queue" is exhausted, event loop will check if there are any CB's inside "nextTick Queue"
// if there are CB's in "nextTick Queue", they will get executed  