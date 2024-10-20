function sample(){
    console.log(this);
}

// Bind method - returns a fn. with specified "this" value
// It doesnot immediately invokes the fn. instead return fn. with specified "this" value.

sample(); // this -> global 
let newSample = sample.bind({});
newSample(); // this -> {}



// Note - we can also pass args. to the bind , that will preset these values in the returned fn.
function sample2(name) {
    console.log("name - ", name);
    console.log("this - ", this);
}

sample2('Tanveer');

let newSample2 = sample2.bind({}, 'Singh');

newSample2(); // we donot need to pass the args. as they have been preset by bind