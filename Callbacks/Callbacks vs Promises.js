// Using Callbacks

// let cart = ["table", "chair"];


// function addToCart(cart, callback){
//     // does it own task
//     console.log("added to cart");
//     let orderId = 111;
//     callback(orderId);
// }

// function proceedToPayment(orderId){
//     console.log(`proceed to payment for order ${orderId}`);
// }

// addToCart(cart, function(orderId){
//     proceedToPayment(orderId);
// })




// Using Promises

function addToCart(){
    console.log("adding to cart");
    let orderId = 123;
    return new Promise((resolve, reject)=>{
        setTimeout(() => resolve(orderId), 4000);
    })
}

let promiseObj = addToCart();

setTimeout(() => {console.log(promiseObj)}, 6000);