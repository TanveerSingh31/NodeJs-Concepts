// E-commerce experiment

let cart = ["shirts", "pants", "shoes"];
let walletBalance = 4000;


function validateCart(){
    return false;
}

function createOrder(item){
    console.log("order created for ", item);

    let orderId = 12345;

    return new Promise((resolve, reject)=>{

        // db operation
        setTimeout(()=>{
            resolve(orderId);
        }, 4000);
    })
}


function proceedToPayment(orderId){

    console.log("Proceeding to payment for order ", orderId);

    let paymentAmount = 1000; 

    let paymentInfo = { orderId, paymentAmount };

    return new Promise((resolve, reject)=>{

        if(!validateCart()){
            reject("Items different from Cart");
        }

        resolve(paymentInfo);
    })
}


function showOrderSummary(paymentInfo){

    console.log(` Order completed for orderId = ${paymentInfo.orderId} with Amount = ${paymentInfo.paymentAmount}`);
    
    return new Promise((resolve, reject) =>{

        setTimeout(() => {
            resolve(paymentInfo.paymentAmount);
        }, 2000);

    });
}

function updateWallet(amount){
    walletBalance -= amount;

    return new Promise((resolve, reject)=>{
        resolve(walletBalance);
    })
}




createOrder("laptop")
    .then( function(orderId){
        return proceedToPayment(orderId);
    })
    .then( function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then( function(amount){
        return updateWallet(amount);
    })
    .then( function(wallet){
        console.log("wallet balance : ", wallet);
    })
    .catch( (err)=>{
        console.log(err);
    })



// OUTPUT
// "order created for "
// 4 sec's wait [ next .then() will get executed only when previous promise is resolved, which will take 4 secs ]
// "Proceeding to payment for order "
//  Order completed for orderId = ${paymentInfo.orderId} with Amount = ${paymentInfo.paymentAmount}
// 2 sec's wait [ next .then() CB will get executed when prev Promise is resolved, which will take 2 secs ] 
// wallet balance : 3000


console.log("******************************************************");


// This can also be done , the first .catch() will only handle errors for promises above them
// And even if it gets invoked, .then() below it will get executed as usual

createOrder("laptop")
    .then( function(orderId){
        return proceedToPayment(orderId);
    })                                     
    .catch( (err)=>{
        console.log(err);
        return 1111;
    })
    .then( function(paymentInfo){
        return showOrderSummary(paymentInfo);
    })
    .then( function(amount){
        return updateWallet(amount);
    })
    .then( function(wallet){
        console.log("wallet balance : ", wallet);
    })
    .catch( (err)=>{
        console.log(err);
    })