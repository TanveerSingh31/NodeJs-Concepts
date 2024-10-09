function first(){
    return new Promise((resolve, reject)=>{
        resolve(123);
    })
}

let promise = first()
    .then((data)=>{
        return data;
    });

// even if CB fn. doesnot return a promise, and returns a normal value
// .then() wraps it in a promise and immediately resolves it with returned data,
//  like this, 
//  Promise.resolve(data) 

// console.log(promise);
setTimeout(()=>console.log(promise), 1000);