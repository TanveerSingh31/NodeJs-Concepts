function add(a){
    let c = 100;
    return function(b){
        console.log(c);   // a & c were present in lexical environment of this function.
        return a+b;
    }
}

function addFive(a){
    return add(5)(a);
}



// Currying - 
console.log(add(1)(2));
console.log(addFive(100));





//----------------------------------------------------

function filterBy(filteringFn){
    return function(arr){
        return arr.filter((el) => filteringFn(el));
    }
}

function filteringFn_Even(el){
    return el % 2 == 0;
}

function filterEven(arr) {
    return filterBy(filteringFn_Even)(arr);
}



console.log(filterEven([1,2,3,4,5,6,7,8,9,10]));