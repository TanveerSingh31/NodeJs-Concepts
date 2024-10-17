let arr = [1,1,1,1,2,2,3,4,5];

let frequency = 0;

console.log("Tan the Man");

console.log("Tan the Man");
console.log("Tan the Man");
console.log("Tan the Man");
console.log("Tan the Man");
console.log("Tan the Man");



let map = new Map();


for(let i of arr) {
    let currFreq = map.get(i);
    if(currFreq == undefined) map.set(i, 0);
    else map.set(i, currFreq+1);
}


let maxFreq = 0;
let numberWithLargestFrequency;

for(let i of arr) {
    if(map.get(i) > maxFreq){
        maxFreq = map.get(i);
        numberWithLargestFrequency = i;
    }
}
 
// sample comment using vim
console.log("sample insert using vim");



console.log(numberWithLargestFrequency);


// tableA, tableB
// emp_id - tableA  1, 1
// emp_id - tableB  1
// how many times emp_id in tableA is present


SELECT tb.emp_id, count(tA.emp_id) as freq
FROM tableB tB
INNER JOIN tableA tA on tA.emp_id = tB.emp_id
group by tb.emp_id;
 
// sample comment using vim
console.log("sample insert using vim");

  
// sample comment using vim
console.log("sample insert using vim"); 
// sample comment using vim
console.log("sample insert using vim");
// sample comment using vim
iconsole.log("sample insert using vim");


