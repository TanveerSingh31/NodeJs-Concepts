function creator(){
    function child1(){
        let childVariable =1;
        console.log('child 1');
    }

    return function child2(){
        console.log('child 2');
        // console.log(childVariable); -> err, because it doesnot come in lexical env. of fn. child2()
        child1();
    }
}


let child2Scope = creator();
child2Scope();



// Lexical Environment of a fn. 
// - It comprises of the variables & fn.'s that were in-scope at the time of declaration of the fn.
// - It also includes lexical environment of the parent fn, if any

// Closures
// - Concept in js , wherein each fn. comprises of the function definition as well as lexical environment of the fn. 