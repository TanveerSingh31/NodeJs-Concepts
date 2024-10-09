function f1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(100), 4000);
    })
}

function f2() {
    return new Promise((resolve, reject)=>{
        resolve(1000);
    })
}


function f3() {
    return 100;
}



f1()
.then((data)=>{
    console.log('f1 data = ', data);
    return f2();
})
.then((data2)=>{
    console.log('f2 data = ', data2);
    return f3();
})
.then((data)=> console.log('f3 data =', data))
.catch(err=> console.log(err));