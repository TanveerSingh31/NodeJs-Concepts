// Some important questions



/*
    @Question 1: Scope & Hoisting

    function test() {
        console.log(a); 
        var a = 10;
    }
    test();

    // ANS - undefined ->  as no TDZ in case of "var"

*/




/* 

    @Question 2: Closure & Loops

    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }



    ANS 

    - In closures, the function saves the variable by "Referrence" and NOT by "value".
    - Incase of "var" since it is "Function-Scoped" , for every iteration  in the loop, it uses the same variable "i", and doesnot create a new one.


    - Incase of "let", since it is "Block-Scoped", for every iteration it creates a new seperate "i" variable , and the function store this referrence to different "i".

    - In Loops , variables created by "let" won't get removed from memory if they are reference by a closure.


*/



/*
    @Question 3: Type Coercion & Equality



*/



console.log([] == true);

const obj = {
    value: 42,
    getValue: function () {
        return this.value;
    }
};
let fn = obj.getValue;
console.log(fn()); 





