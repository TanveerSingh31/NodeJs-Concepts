
// main function to be called
// first function to be called only after main has finished its work
// second function to be called only after first has finished its work

function main(cb){
    console.log("main function");
    cb();
}

function first(cb){
    console.log("first function");
    cb();
}

function second(cb){
    console.log("second function");
    cb();
}

function third(){
    console.log("third function");
}

// callback hell
main(function(){
    first(function(){
        second(function(){
            third();
        });
    });
});


// OUTPUT
// console.log("main function");
// console.log("first function");
// console.log("second function");
// console.log("third function");
