// FUNCTIONS : REUSABLE BLOCK OF CODE.

//TYPE OF FUNCTIONS.

//1. FUNCTION DECLARATION: DECLARING A FUNCTION.
//2. FUNCTION EXPRESSION: EXPRESSION A FUNCTION INSIDE A VARIABLE.
//3. ANONYMOUS FUNCTION: A FUNCTION WITHOUT A NAME.
//4. ARROW FUNCTION: A FUNCTION WHICH HAVE A SYNTAX AS AN ARROW. ()=>{  }
//5. IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION.
//6. CALLBACK FUNCTION: A FUNCTION WHICH IS PASSED AS A ARGUMENT TO ANOTHER FUNCTION.
//7. Higher order function: A function which accepts another function as a parameter.

//FUNCTION DECLARATION

function declaration(a = 3, b = 4) {
  //default values
  //parameters = > formal values. Just represent the arguments inside a function
  return a + b; // return keyword is used to return a value from a function. break statement
  console.log(a + b);
  console.log(a + b);
  console.log(a + b);
}
let b = declaration; // function ko store karr raha hu.
let abc = declaration(1, 2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.

// console.log(abc);

//FUNCTION EXPRESSION

let varFunc = function (a, b) {
  return a + b;
};

//ANONYMOUS FUNCTION ==> Function without a name. And they need to be expressed by a variable.

let anonymous = function () {
  console.log("I am an anonymous function");
};

// Invoking a function and calling a function are used interchangeably.

//ARROW FUNCTION == released in es6, this function handles "this" keyword in a better way.It is just a easier way to write a function.

let arrow = (a, b, callback) => {
  console.log("This is arrow funciton");
};

// arrow(1,2,callback);

//IIFE=> Immediately Invoked Function Expression

// (function iife(){
//   console.log("IIFE function");
// })();

//CALLBACK FUNCTION => These are passed inside a function as argument.

function callback(result) {
  return result+" this is frm the callback function";
}
// console.log(callback());

(function iife(){
  console.log("IIFE FUNCTION");
})();

function higherOrder(a, b, iife) {
  let result = a + b;
  // return callback(result);
  iffe()
}

console.log(higherOrder(1, 2, iife));


//IIFE FUNCTION => IMMEDIEATELY INVOKED FUNCTION EXPRESSION



// PENDING THINGS : 
//1. THIS KEYWORD 
//2. IIFE FUNCTION : ENCAPSULATION