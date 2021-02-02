const addBookContainer = document.querySelector("#book-info-container");
const inputs = document.createElement("div");
const addBook = document.querySelector(".addBook-btn");
const addAuthor = document.createElement("input");
const addTitle = document.createElement("input");
const addPages = document.createElement("input");
const addConfirmButton = document.createElement("button");
const readButton = document.getElementById("switch");
const bookContainer = document.querySelector(".book");


addBook.addEventListener("click", () => {
  inputs.setAttribute("id", "book-info");
  document.getElementById("book-info-container").appendChild(inputs);
  addTitle.placeholder = "Title";
  document.getElementById("book-info").appendChild(addTitle);
  addAuthor.placeholder = "Author";
  document.getElementById("book-info").appendChild(addAuthor);
  addPages.placeholder = "Pages";
  addPages.setAttribute("type", "number");
  document.getElementById("book-info").appendChild(addPages);
  addConfirmButton.innerHTML = "confirm";
  document.getElementById("book-info").appendChild(addConfirmButton);
});

function removeAddBook() {
  inputs.remove();
}

function resetAddBookInputs() {
  addTitle.value = "";
  addAuthor.value = "";
  addPages.value = "";
}

addConfirmButton.addEventListener("click", () => {
  let title = addTitle.value;
  let author = "by " + addAuthor.value;
  let pages = "pages: " + addPages.value;
  title = new Book(title, author, pages, "yes");
  createBook(title);
  myLibrary.push(title);
  removeAddBook();
  resetAddBookInputs();
  console.table(myLibrary);
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const oneThousandAndEightyFour = new Book(
  "1984",
  "George Orwell",
  "300",
  "ye"
);
const gulagArhipelago = new Book(
  "Gulag Arhipelago",
  "Alexandru Soljenitzn",
  "300",
  "no"
);

let myLibrary = [];

function createBook(book) {
  let titleBook = document.createElement("div");
  let authorBook = document.createElement("div");
  let pagesBook = document.createElement("div");
  let divBook = document.createElement("div");
  let readButtonCheckbox = document.createElement("INPUT");
  readButtonCheckbox.setAttribute("type", "checkbox");
  authorBook.classList.add("author");
  pagesBook.classList.add("pages");
  titleBook.classList.add("title");
  divBook.setAttribute("class", book.title);
  divBook.classList.add("bookId");
  titleBook.innerHTML = book.title;
  authorBook.innerHTML = book.author;
  pagesBook.innerHTML = book.pages;
  divBook.appendChild(titleBook);
  divBook.appendChild(authorBook);
  divBook.appendChild(pagesBook);
  divBook.appendChild(readButtonCheckbox);
  bookContainer.appendChild(divBook);
}
