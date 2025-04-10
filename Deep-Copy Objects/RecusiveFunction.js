function cloneDeep(data) {

    // Return Primitive datatypes as it is, as they are copy be value.
    if(data === null || typeof data !== 'object'){ 
        return data;
    }

    let ans = Array.isArray(data) ? [] : {};

    Object.keys(data).forEach(key => {
        ans[key] = cloneDeep(data[key]); // If there is nested obj/array
    });

    return ans;
}


let obj = {
    a:1,
    b:2
}

let objCloned = cloneDeep(obj);

objCloned.a = 100;


console.log(obj);
console.log(objCloned);

