function task1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("task1 output"), 5000);
    })
}

function task2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject("task2 Failed"), 1000);
        // setTimeout(()=> resolve("task2 output"), 1000);
    })
}

function task3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve("task3 output"), 6000);
    })
}


let time = Date.now();

Promise.allSettled([task1(), task2(), task3()])
.then((data)=>{
    console.log(data);                                 
    console.log("Time Taken = ", Date.now() - time);   // time taken will be the maximum time taken by promise to fulfill
})
.catch((err)=>{
    console.error(err);
})



// Notes

// [
//     { status: 'fulfilled', value: 'task1 output' },
//     { status: 'rejected', reason: 'task2 Failed' },
//     { status: 'fulfilled', value: 'task3 output' }
// ]

// Will wait for all promises to settle
// Return result for each promise , fullfilled / rejected