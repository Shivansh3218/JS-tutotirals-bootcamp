//DOM => Document Object Model, programming interface for web documents

//D => Document, TOP level object in DOM  ENTIRE HTML DOCUMENT.

//O =< Object, everything in JS is an object.

//M => Model, structured representation of a document.

//Selectors => Used to select HTML elements
//class selectors
//id selectors
//tag selectors
//query selectors
//query selectorAll

// ID SELECTORS

// const heading1 = document.getElementById('heading-h1');

// console.log(heading1);

// CLASS SELECTORS

// let heading2 = document.getElementsByClassName('heading-h2')[0];
// console.log(heading2);

// // TAG SELECTORS

// let hTags = document.getElementsByTagName('button');

// console.log(hTags);

// QUERY SELECTORS  => returns the first element that matches a specified CSS selector in the document.
//for id = '#heading-h1'
//for class = '.heading-h2'
//for tag = 'button'

// let querySelector = document.querySelector('.heading-h2');

// console.log(querySelector);

// QUERY SELECTOR ALL = > returns all elements that matches a specified CSS selector in the document.

// let querySelectorAll = document.querySelectorAll('.heading-h2');

// console.log(querySelectorAll);

// Events => Actions that occur in the system you are programming, which the system tells you about so you can respond to them in some way if desired.

// let button = document.querySelector("button");

// function add() {
//   return 12387123 + 12312;
// }

// button.addEventListener("click", () => {
//   // console.log('Button Clicked');
//   document.body.style.background = "red";
//   button.style.background = "green";
//     button.style.color = "white";
//   console.log(add());

// });


//DEFER KEYWORD => defer attribute in HTML is used to prevent the script from running until the HTML is fully loaded.


// let h1 = document.querySelector('h1');
// console.log(h1);

// h1.addEventListener('click', () => {
// console.log('H1 Clicked');

// })

//inner text => returns the text content of an element.

// console.log(document.images)
// console.log(document.links[2].innerText)
// console.log(document.all)


// let linkText = document.querySelectorAll('a')[2].innerText;

// console.log(linkText)

//InnnerHTML

// let div = document.querySelector('div');
// console.log(div.innerHTML);

































