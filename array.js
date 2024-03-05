//Array=> Non primitive data type, index and value pair, Mutable, type of array is object. let arr = [];
//1. Shift => It is used to remove the first element from an array. arr.shift()
//2. Unshift => It is used to add one or more elements to the beginning of an array. arr.unshift()
// 3. Pop => It is used to remove the last element from an array. arr.pop()
// 4. Push => It is used to add one or more elements to the end of an array. arr.push()

//Length property => It is used to return the length of an array. arr.length

let arr = [1, 2, 3, 4];
// console.log(arr.length, "This is the length of an array");
arr.shift();
arr.unshift("0");

arr.pop();
arr.push("new element");
console.log(arr, arr.length,"This is the array after removing the first element");


//SPECIAL OPERATOR  = > delete operator very poor practice to use it

delete arr[1];
console.log(arr,arr.length, "This is the array after removing the first element");