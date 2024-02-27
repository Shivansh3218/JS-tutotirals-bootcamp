//Hoisting: The declarations are moved to the top of their scope. It is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a); //usage
// /// Reached here and not found this a variable because a is in a temporal dead zone.

// var a;
// // console.log(a);
// // Temporal dead zone: The time between the start of the block and the actual declaration of the variable is called the temporal dead zone.

// sum();
// var sum = function (){
//     console.log("Hello");
// }

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//        readline.close();
//   })

// console.log(a)
// var a = 20;

// FUNCTION DECLARATIONS ARE HOISTED, FUNCTION EXPRESSIONS ARE NOT HOISTED.

// sum();
var abc = undefined;
abc();
// When we are declaring a function directly this is called a function declaration.
function sum() {
  console.log("THIS IS THE FUNCTION DECLARATION");
}

//Function expression: When you are expressing a function inside a variable it is called the function expression.

console.log(abc, "The value of abc"); // It will give undefined
abc(); // It will give error BECAUSE THE UNDEFINED CANNOT BE CALLED AS A FUNCTION
var abc = function () {
  console.log("THIS IS THE FUNCTION EXPRESSION");
};
