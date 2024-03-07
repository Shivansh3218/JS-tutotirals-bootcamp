//Array=> Non primitive data type, index and value pair, Mutable, type of array is object. let arr = [];
//1. Shift => It is used to remove the first element from an array. arr.shift()
//2. Unshift => It is used to add one or more elements to the beginning of an array. arr.unshift()
// 3. Pop => It is used to remove the last element from an array. arr.pop()
// 4. Push => It is used to add one or more elements to the end of an array. arr.push()

//Length property => It is used to return the length of an array. arr.length

// let arr = [1, 2, 3, 4];
// // console.log(arr.length, "This is the length of an array");
// arr.shift();
// arr.unshift("0");

// arr.pop();
// arr.push("new element");
// console.log(arr, arr.length,"This is the array after removing the first element");

// //SPECIAL OPERATOR  = > delete operator very poor practice to use it

// delete arr[1];
// console.log(arr,arr.length, "This is the array after removing the first element");

// let arr = [1, 2, 3, 4];

//toString => It is used to convert an array to a string. arr.toString()

// console.log(typeof arr.toString(),"This is the type" );

//Array.at() => It is used to return the element at a specified index. arr.at(index);

// console.log(arr.at(2), "This is the element at a specified index");

//Concat Method => It is used to join two or more arrays. arr.concat(array1, array2, array3)

// let arr = [1, 2, 3, 4];
// let arr2 = [1, 2, 3, 4];

// console.log(arr.concat(arr2, [5,6,7,8]), "This is the joined array");

//Flat method
// let arr = [1,2,3,4];
// let arr2 = [1,4,[5,6,7,8,[1,2]]]; // depth of array is 2.
// depth == dimension of the array. [1,2,3] = > depth =1
//[1,2,[3,4]] => depth = 2
// [1,2,3[1,2,3,[1,2,3]]] => depth = 3

// console.log(arr2.flat(2), "This is the flattened array");

//Array.isArray() => It is used to check whether an object is an array or not. Array.isArray(arr).

// console.log(Array.isArray(arr2));

// let arr2 = [1, 4, [5, 6, 7, 8, [1, 2]], {}, "sasd"];
// for (let i = 0; i < arr2.length; i++) {
//   // console.log(arr2[i]);
//   console.log(Array.isArray(arr2[i]));
// }


//Array.slice() => It is used to extract a part of an array and returns a new array. arr.slice(start, end)

// let arr = [1,2,3,4]
// console.log(arr.slice(1), "This is the sliced array");


//Array.splice() => It is used to add or remove elements from an array. arr.splice(start index, deleteCount, insert_item1, insert_item2, insert_item3);

// let arr = [1,2,3,4];
// arr.splice(2,1);
// console.log(arr, "This is the spliced array");
// arr[arr.length-2] = "new value";
// console.log(arr, "This is the updated array");

//Join method => It is used to join all the elements of an array into a string. arr.join(separator)
// let arr = ["Hello", "Shivansh", "Ankush", "Rahul"];

// console.log(arr.join(""), "This is the joined string");

//Reverse method => It is used to reverse the elements of an array. arr.reverse()

// console.log(arr.reverse(), "This is the reversed array");

// let arr = [2,3,7,3,1];
// console.log(arr.reverse(), "This is the sorted array");

//Array.sort() => It is used to sort the elements of an array. arr.sort()

// let arr = [2,3,7,3,10];
// // let strArr = ["Hello", "Shivansh", "Ankush", "Rahul"];

// console.log(arr.sort(), "This is the sorted array");
// console.log(arr.sort((a,b)=>b-a), "This is the sorted array");  DISCUSS LATER


//INDEXOF => It is used to return the index of the first occurrence of a specified value in an array. arr.indexOf(value)

// console.log(arr.indexOf(3), "This is the index of the first occurrence of a specified value in an array");

// console.log(arr.lastIndexOf(3), "This is the index of the last occurrence of a specified value in an array");


//Array.includes() => It is used to check whether an array contains a specified value. arr.includes(value, start)
// let arr = [2,3,7,3,10];
// console.log(!arr.includes(10), "This is the boolean value");