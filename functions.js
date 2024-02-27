// FUNCTIONS : REUSABLE BLOCK OF CODE.

//TYPE OF FUNCTIONS.

//1. FUNCTION DECLARATION: DECLARING A FUNCTION.
//2. FUNCTION EXPRESSION: EXPRESSION A FUNCTION INSIDE A VARIABLE.
//3. ANONYMOUS FUNCTION: A FUNCTION WITHOUT A NAME.
//4. ARROW FUNCTION: A FUNCTION WHICH HAVE A SYNTAX AS AN ARROW. ()=>{  }
//5. IIFE: IMMEDIATELY INVOKED FUNCTION EXPRESSION.
//6. CALLBACK FUNCTION: A FUNCTION WHICH IS PASSED AS A PARAMETER TO ANOTHER FUNCTION.
//7. NAMED FUNCTION: A FUNCTION WITH A NAME.
//8. Higher order function: A function which accepts another function as a parameter.

//FUNCTION DECLARATION

function declaration(a=3, b=4) { //default values
  //parameters = > formal values. Just represent the arguments inside a function
  return a + b; // return keyword is used to return a value from a function. break statement
   console.log(a + b);
}
let b = declaration // function ko store karr raha hu.
let abc = declaration(1,2); //argurments= > Actual values. FUNCTION KI RETURN VALUE KO STORE KARRA HU.

// console.log(abc); 


//FUNCTION EXPRESSION

