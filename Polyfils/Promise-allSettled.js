// PromiseAllSettled - wait for all promises to settle


function PromiseAllSettled(promises) {
    let result = [];
    let settledPromiseLength = 0;

    return new Promise((resolve, reject) => {

        promises.forEach((p, index) => {

            p.then((data) => {
                result[index] = {status: "fulfilled", data};
                settledPromiseLength++;
                if(settledPromiseLength == promises.length) {
                    resolve(result);
                }
            })
            .catch((err)=> {
                result[index] = {status: "rejected", err};
                settledPromiseLength++;
                if(settledPromiseLength == promises.length) {
                    resolve(result);
                }
            })
        })

    })
}   



// Promises

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1000);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(2000);
    }, 10000);
});



(async () => {
    try{
        let res = await PromiseAllSettled([p1, p2]);
        console.log("result = ", res);
    }
    catch(err) {
        console.error(err);
    }
})();