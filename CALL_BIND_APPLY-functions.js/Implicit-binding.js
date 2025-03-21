let obj = {
    name: 1,
    greet() {
        console.log(this);
    }
}

// NOTE - value of this will depend on from where the function is invoked


// 1. Called via an object
obj.greet(); // this -> object


// 2. Called w/o Object -> points to global object
let greet2 = obj.greet;
greet2(); // this -> global / window


// 3. Arrow function - "this" is lexically scoped
let obj2 = {
    name: "Tanveer",
    greet: () => {
        console.log(this);
    }
}

obj2.greet(); // undefined -> because no value of "this" when fn. was declared




// 4. How to get "this" even in Arrow fn ? 
// "this" in arrow fn. takes in from lexical environment  

let obj3 = {
    name: "Tanveer",
    greet: function() {
        setTimeout(()=>{
            console.log(this); // obj3, because when greet is called, inside the greet fn. "this" is usable since it is normal fn. and "this" comes in lexical scope of inner arrow fn. 
        })
    }
}

obj3.greet(); // obj3




// 5. If "normal fn." is wrapped inside "normal fn." -> then "this" is not accessible in the inner fn. 

let obj4 = {
    name: "Tanveer",
    greet: function() {
        setTimeout(function (){
            console.log(this); // global obj -> as this fn. was not called from inside of an object
        })
    }
}

obj4.greet();