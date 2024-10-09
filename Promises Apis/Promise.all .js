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

Promise.all([task1(), task2(), task3()])
.then((data)=>{
    console.log(data);                                 
    console.log("Time Taken = ", Date.now() - time);   // time taken will be the maximum time taken by promise to fulfill
})
.catch((err)=>{
    console.error(err);
})



// Notes

// return Array of output of all promises if all get fulfilled
// If any one gets rejected, Promise.all() also gets rejected with rejected Promise (Promise that got rejected first) data 