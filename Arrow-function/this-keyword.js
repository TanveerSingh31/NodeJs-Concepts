
/*
    - Arrow fn. don't have any binding for their own this.
    - They inherit this from their surrounding scope (Lexical scope) or Parent 
    - Therefore, value of "this" remains fixed after declaration of arrow fn. 
        and cannot be changed afterwards, even using call, apply, bind. 

*/


let obj = {
    normalFn: function() {
        console.log(this);
    } ,

    arrowFn: () => {
        console.log(this);
    }
}

obj.normalFn() // obj
obj.arrowFn() // window/ global obj. -> as it was created in global scope




// Solution - To make it bind to "this", create inside a normal fn.

let obj2 = {
    normalFn: function() {
        console.log("this inside Normal fn");
        console.log(this);

        // value of "this" -> obj2, here.
        // Hence arrow fn. binds to obj2
        this.arrowFn = () => {
            console.log("this inside Arrow fn");
            console.log(this);
        }
    } 
}


obj2.normalFn(); // obj2 ,  -> adds "arrowFn" method to the obj2
obj2.arrowFn(); // obj2 -> as "this"->obj2, during creatiion of arrowFn




obj2.arrowFn.call({a: 10000000}); // No change
obj2.arrowFn.apply({a: 10000000}); // No change

let arrownFnBind = obj2.arrowFn.bind({a: 10000000});
arrownFnBind(); // No change



let obj3 = {a: 1000000};
obj2.normalFn.call(obj3); // {a: 1000000}
obj3.arrowFn(); // {a:1000000, arrowFn}

let fn = obj3.arrowFn;
fn(); // {a:1000000, arrowFn}