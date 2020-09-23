const addBookContainer = document.querySelector("#book-info-container");
const inputs = document.createElement("div");
const addBook = document.querySelector(".addBook-btn");
const addAuthor = document.createElement("input");
const addTitle = document.createElement("input");
const addPages = document.createElement("input");
const addConfirmButton = document.createElement("button");
const library = document.querySelector("#renderBooks");
const readButton = document.getElementById("switch");

let counter = 2;

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

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const oneThousandAndEightyFour = new book(
  "1984",
  "George Orwell",
  "300",
  "readingsss"
);
const gulagArhipelago = new book(
  "Gulag Arhipelago",
  "Alexandru Soljenitzn",
  "300",
  "no"
);

let myLibrary = [oneThousandAndEightyFour, gulagArhipelago];

myLibrary.forEach((e) => {
  let title = document.createElement("div");
  title.setAttribute("id", "title");
  let author = document.createElement("div");
  author.setAttribute("id", "author");
  let pages = document.createElement("div");
  pages.setAttribute("id", "pages");
  title.textContent = e.title;
  author.textContent = e.author;
  pages.textContent = e.pages;
  let book = document.createElement("div");
  book.setAttribute("id", "book");
  document.getElementById("book").appendChild(title);
  document.getElementById("book").appendChild(author);
  document.getElementById("book").appendChild(pages);
  document.getElementById("book").appendChild(readButton);
  document.getElementById("renderBook").appendChild(book);
});
