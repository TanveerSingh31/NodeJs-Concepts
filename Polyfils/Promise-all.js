// Polyfil for Promise.all in JS

function PromiseAll(promises) {

    let result = [];
    let promisesResolvedCount = 0;
    return new Promise((resolve, reject) => {

        // If empty array, immediately resolve the promise
        if(promises.length == 0) resolve([]);

        promises.forEach((p, index) => {
            console.log("individual promise = ", p);
            
            p
            .then((data) => {
                // If all the promises got resolved, resolve the Parent promise
                result[index] = data;
                promisesResolvedCount++;
                if(promisesResolvedCount == promises.length) {
                    resolve(result);
                }

            })
            .catch(err => {
                // if any promise gets rejected, reject the Parent promise
                reject(err);
            });

        });
    });
}


// Promises

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(1000);
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(1000);
    }, 10000);
});




(async () => {
    try{
        let res = await PromiseAll([p1, p2]);
        console.log("result = ", res);
    }
    catch(err) {
        console.error(err);
    }
})();