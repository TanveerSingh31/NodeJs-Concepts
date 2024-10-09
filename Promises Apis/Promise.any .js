function task1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> reject("task1 output"), 5000);
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
        setTimeout(()=> reject("task3 output"), 6000);
    })
}


Promise.any([task1(), task2(), task3()])
.then((data)=>{
    console.log(data);
})
.catch(err => {
    console.log(err);
});


// Notes

// It will wait for First fulfilled Promise, and return its result

// If all Promise get Rejected , it will return Aggregated Error

// [AggregateError: All promises were rejected] {
//     [errors]: [ 'task1 output', 'task2 Failed', 'task3 output' ]
//   }