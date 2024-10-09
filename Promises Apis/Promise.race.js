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


Promise.race([task1(), task2(), task3()])
.then((data)=>{
    console.log(data);
})
.catch(err => {
    console.log(err);
});


// Notes

// Result of first settled promise will be it's result
// If it is fulfilled, we will get data
// If it is Rejected, Promise.catch will get rejected  