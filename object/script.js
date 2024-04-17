let bookNameInput = document.getElementById("book_name");
let bookAuthorInput = document.getElementById("author");
let bookPriceInput = document.getElementById("price");

let addBookButton = document.getElementById("add_book");

let book = {
  name: "",
  author: "",
  price: 0,
};

let bookListArr = [];

addBookButton.addEventListener("click", function () {

  book.name = bookNameInput.value;
  book.author = bookAuthorInput.value;
  book.price = bookPriceInput.value;
  //   console.log(book);

  if (!book.name.length > 0 || !book.author.length > 0 || !book.price > 0) {
    alert("Please fill all the fields");
    return;
  }

  addTableRow();
  bookListArr.push(book);

  console.log(bookListArr);

  let bookList = document.querySelector("#book_list");
  bookList.innerHTML = "";
  bookListArr.map((book) => {
    let bookItem = document.createElement("li");

    bookItem.innerHTML = `Book Name: <span id='bookName'>${book.name}</span> Author: <span id='bookAuthor'>${book.author}</span> Price: <span id='bookPrice'>${book.price}</span>`;

    bookList.appendChild(bookItem);
  });
});

// <!-- <li>Book Name: <span id="book_name">Book 1</span> Author: <span id="author">Author 1</span> Price: <span id="price">100</span></li> -->

function showBook() {
  let bookList = document.querySelector("#book_list");

  let bookItem = document.createElement("li");

  bookItem.innerHTML = `Book Name: <span id='bookName'>${book.name}</span> Author: <span id='bookAuthor'>${book.author}</span> Price: <span id='bookPrice'>${book.price}</span>`;

  bookList.appendChild(bookItem);
}

function addTableRow() {
  let tbody = document.querySelector("tbody");
  console.log(tbody);

  let tr = document.createElement("tr");
  tr.innerHTML = `
             <td>${book.name}</td>
             <td>${book.author}</td>
             <td>${book.price}</td>
`;

  tbody.appendChild(tr);
  bookNameInput.value = "";
  bookAuthorInput.value = "";
  bookPriceInput.value = "";
}
