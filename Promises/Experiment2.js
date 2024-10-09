
function returnsFirstPromise(){
  return new Promise((resolve, reject)=>{
    resolve(123);
  });
}

function returnsSecondValue(){
  return new Promise((resolve, reject)=>{
    resolve(456);
  });
}


returnsFirstPromise()
.then((firstResolveVal) => {
  returnsSecondValue(firstResolveVal)
})
.then((someVal) => {
  console.log(someVal);
})
