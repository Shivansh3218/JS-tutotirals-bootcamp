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
// console.log(document.links)
// console.log(document.all)

// let linkText = document.querySelectorAll('a')[2].innerText;

// console.log(linkText)

//InnnerHTML

// let div = document.querySelector('div');
// div.addEventListener("click",()=>{
//     console.log('Div Clicked');
// })
// console.log(div);


//DOM MANIPULATION

// let heading = document.querySelector("#heading");

// let button = document.querySelector("#changeBtn");

// //click

// button.addEventListener("click", () => {

// console.log(heading.innerText);

// //heading.innerText = "Hello this is heading 1";

// heading.innerText = "Shivansh"


// });

// console.log(document.lastElementChild.lastElementChild.lastElementChild);


//METHODS = > getAttribute, setAttribute, removeAttribute

//getAttribute => returns the value of the attribute with the specified name, of an element.

// setAttribute => sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.


//removeAttribute => removes the specified attribute from an element.




//getAttribute => returns the value of the attribute with the specified name, of an element.

// let btnAttribute = document.querySelector("button");
// let heading =    document.querySelector("h1");
// let removeBtn = document.querySelector("#remove");


// removeBtn.addEventListener("click",()=>{
//     heading.setAttribute("class","display")
// })


// btnAttribute.addEventListener("click",()=>{
// heading.setAttribute("class","red")
// })

// let greenBtn = document.body.getElementsByTagName("button")[1]

// greenBtn.addEventListener("click",()=>{
//     heading.setAttribute("class","null")
// });


// console.log(greenBtn)
// console.log(btnAttribute.getAttribute("type"));



//setAttribute => sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// btnAttribute.setAttribute("class","no--attribute");



//removeAttribute => removes the specified attribute from an element.

// btnAttribute.removeAttribute("class");

// console.log(btnAttribute)


// let h = document.querySelector("h1");

// let btn = document.querySelector("button");

// let img = document.querySelector("img");

// btn.addEventListener("click",()=>{
//  h.setAttribute("class","display");
//     img.setAttribute("class","null");
// });





























