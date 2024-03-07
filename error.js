//ERRORS IN JAVASCRIPT 
//1. Syntax Error
//2. Reference Error
//3. Type Error


//Syntax Error: It is an error that occurs when the syntax of the code is incorrect. It is a compile-time error.

// let a  = 10;
// console.log(a); //usage  


// Reference Error: It is an error that occurs when a variable is used before it is declared.

// console.log(a); //usage
// let a = 1;  // initializing this a===> Temporal dead zone


// Type Error: It is an error that occurs when a value is not of the expected type.

// let b = 100; //number
// b(); // calling it as a function but it is a number. type error


//Runtime Error: It is an error that occurs during the execution of the code.

// let a = 10;
// console.log(a/0); //usage


//error throwing function

// function throwError(){
    // throw new Error("This is an error");
// }
// throwError()