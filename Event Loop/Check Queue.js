// I/O polling is done, to check if I/O operation is completed
// If they are completed, only then CB's are added to "IO Queue"
const fs = require('fs');


fs.readFile(__filename, ()=>{
    console.log("inside readFile CB4");
    setImmediate(()=> console.log("inside Check Queue CB1"));  // will add CB to Check Queue

    process.nextTick(()=> console.log("nextTick inside IO"));
    Promise.resolve().then(()=> console.log("Promise inside IO"));
})


// Both CB will get Executed in next Iteration of Event Loop
// Since, In 1st phase IO polling is done , which will add CB to "IO Queue", but it will get executed only in 2nd iteration
// In 2nd Iteration, when IO Queue CB is executed, it will also add CB in CHECK Queue
// After completion of IO Queue, control will move to CHECK Queue and CB added in Check Queue will get executed.

// ORDER 
// "inside readFile CB4" 
// "nextTick inside IO"
// "Promise inside IO"
// "inside Check Queue CB1"
