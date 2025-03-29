// splice -> modifies the original array

// Delete element from specific index
// Replace element with some other element at specific index

// 1st Arg -> start index to remove elements from 
// 2nd Arg -> no. of elements to remove
// 3rd Arg (optional) -> elements to replace deleted elements with


let arr = [1,2,3,4,5,6];
arr.splice(1, 2); // Removes 2 elements starting from 1 index

console.log(arr);




let arr2 = [1,2,3,4,5,6];
arr2.splice(2, 1, "Tanveer", "Singh"); //[1,2,"Tanveer", "Singh",4,5,6]

console.log(arr2);



