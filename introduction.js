// Datatypes in javascript
let number = 10.5;
// 1. Number => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10.5, 10.6, 10.7, 10.8, 10.9, 11;  truthy value
// 2. String => "Hello", "World", "Hello World", "Hello World 123", "Hello World 123.456"; truthy value
let string = "hello";
// 3. Boolean => true, false;
// 4. Undefined => undefined;
// let a;
//console.log(a); // undefined
// 5. Null => null; falsy value
// let b = null;
//console.log(b); // null falsy value
// 6. Object => {key: 'value'}; truthy value

let muktai = {
  name: "Muktai",
  age: 25,
  isMarried: false,
  role: "Software Engineer",
};
// Object is a collection of key-value pairs. It can store multiple values in a single variable.
let manoj = {
  name: "Manoj",
  age: 30,
  isMarried: true,
  role: "QA",
};

let ankush = {
  name: "Ankush",
  age: 40,
  isMarried: true,
  role: "Manager",
};


console.log(manoj.role, "This is Manoj's role");

console.log(ankush.role, "This is Ankush's role");

// 7. Array => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; truthy value
// Array is a collection of data. It can store multiple values in a single variable.
let arr = [
  1,
  2,
  3,
  [1, 2, 23, 4],
  4,
  5,
  "6",
  7,
  {
    name: "Muktai",
    age: 25,
    isMarried: false,
    role: "Software Engineer",
  },
  9,
  10,
];

console.log(arr);

// Function is a block of code that can be reused. It can take parameters and return value it may not return a value.

// keywords are reserved words in javascript. They have special meaning in javascript. They cannot be used as variable names, function names, or any other identifiers.

let num = 10;
let num2 = 20;
let num3 = 30;

//parameters are the names listed in the function definition.
//arguments are the real values passed to the function.

// Function Declaration

function addition(a, b, c) {
    return a+b+c;
}

//calling a function
console.log(addition(num, num2, num3),"yhis is a first call");
console.log(addition(20, 30, 40),"this is a second call");
console.log(addition(30, 40, 50),"this is a third call");

// Function Expression
let expressedFunction = addition;

console.log(expressedFunction(10, 20, 30),"This is a function expression");

// PRIMITVE AND NON PRIMITIVE DATATYPES

// 1. Primitive Datatypes => Number, String, Boolean, Undefined, Null
// 2. Non Primitive Datatypes => Object, Array, Function
