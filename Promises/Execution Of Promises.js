
function createOrder(item){

    console.log("order created from item ", item);
    let orderId = 123;

    return new Promise((resolve, reject) => {
        setTimeout(()=>reject(orderId), 2000);
    });
}

let promiseObj = createOrder("shirt");

console.log(promiseObj);

setTimeout(() => console.log(promiseObj), 2000);


// IMP! =>  Only when the promise is rejected, the CB fn. inside catch is moved to Promise Queue (MICROTASK QUEUE)
// It is not pushed to the Promise queue earlier

promiseObj.catch((err)=> console.log(err));



// EXECUTION
// "order created from item "
// "pending promise"
// Event-Loop moves to Timer Queue , After 2 sec's CB is pushed to Timer Queue, and the Promise is REJECTED
// This makes the CB fn. in Catch move to Promise Queue
// Execution shifts from Timer Queue to MicroTask Queue, CB inside Microtask Queue is executed
// Execution again comes back to Timer Queue, executes the remaining CB

// OUPTUT
// "order created from item "
// "pending promise"
// err (CB of Catch Block) => MICROTASK QUEUE
// "rejected Promise" => TIMER QUEUE
