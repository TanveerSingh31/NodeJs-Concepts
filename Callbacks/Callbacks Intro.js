function main(cb) {
    console.log("this is main function => 0");
    let data = 123;
    cb(data);
}

// Callback fn. passed to main , to be called inside main function
main(function first(data) {
    console.log("this is first function, " + data);
});