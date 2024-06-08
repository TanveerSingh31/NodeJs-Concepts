// V.IMP Concept

/*
 POINTS TO BE NOTED

 => First .then() block will only get executed if the function returns a promise

 => Later .then() blocks can receive the result of the previous block, 
    regardless of whether the previous block returns a value or a Promise.

 => we need to "return" from each .then() block,
    because whatever we return from current .then() block, will be passed to next .then() block

 => If prev .then() block returns NON-Promise value,
    the next .then() block will get executed immediately with the returned value

** IMP
 => If prev .then() block returns Promise,
    the next .then() block will only get executed when the Promise is resolved

 => If Any promise gets rejected, the control will move to catch block
     
*/


function createOrder(item){
    console.log("order created for item ", item);
    let orderId = 111;

    return new Promise((resolve, reject)=>{
        resolve(orderId);
    });
}


function proceedToPayment(orderId){
    console.log("payment done for orderId = ", orderId);
    let paymentInfo = 1000;

    return new Promise((resolve, reject)=>{
        resolve(paymentInfo);
    })
}


// Each .then() block needs to return something , whether Value or Promise 
// Otherwise next .then() CB will recieve "undefined" as input argument

createOrder("shirt")
    .then((orderId) => { 
        console.log(orderId);
        return orderId;       // Normal value being returned
    })
    .then((orderId)=> {
        return proceedToPayment(orderId)     // Promise being returned
    })
    .then((paymentInfo) => {
        console.log("paymentInfo => ", paymentInfo)
    })
    .catch((err) => console.log(err));



// OUTPUT
// "order created for item "
// console.log(orderId)
// "payment done for orderId = 111"
// "paymentInfo => 1000"