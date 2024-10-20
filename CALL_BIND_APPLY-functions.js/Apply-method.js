function addNumbers(a, b, ...args){
    console.log(args);
    console.log(this);
    return (args.length ==0) ? a + b : args.reduce((ans, currValue)=>{
        console.log(ans);
        return ans + currValue;
    }, a+b);
}


// NOTE - Only difference between call() & apply() is in apply we have to pass array of args.
let ans = addNumbers.apply({'key': 123}, [1,2,3,4]);
console.log(ans);

