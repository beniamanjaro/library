const addBookContainer = document.querySelector("#book-info-container");
const inputs = document.createElement("div");
const addBook = document.querySelector(".addBook-btn");
const addAuthor = document.createElement("input");
const addTitle = document.createElement("input");
const addPages = document.createElement("input");
const addConfirmButton = document.createElement("button");
const cancelAddBookButton = document.createElement("button");
const readButton = document.getElementById("switch");
const bookContainer = document.querySelector(".book");
cancelAddBookButton.classList.add("cancelBook-btn")

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
  cancelAddBookButton.innerHTML = "cancel";
  document.getElementById("book-info").appendChild(cancelAddBookButton);
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function removeAddBook() {
  inputs.remove();
}

function resetAddBookInputs() {
  addTitle.value = "";
  addAuthor.value = "";
  addPages.value = "";
}

cancelAddBookButton.addEventListener("click", () => {
  removeAddBook();
  resetAddBookInputs();
})

addConfirmButton.addEventListener("click", () => {
  if(addTitle.value == 0 || addAuthor.value == 0 || addPages.value == 0) {
    alert("Please enter valid inputs!")
  } else {
  let title = addTitle.value;
  let author = "by " + addAuthor.value;
  let pages = "pages: " + addPages.value;
  title = new Book(title, author, pages);
  createBook(title);
  removeAddBook();
  resetAddBookInputs();
  }
})

function createBook(book) {
  let titleBook = document.createElement("div");
  let authorBook = document.createElement("div");
  let pagesBook = document.createElement("div");
  let divBook = document.createElement("div");
  let readText = document.createElement("LABEL");
  let readButtonCheckbox = document.createElement("INPUT");
  readText.classList.add("readText")
  titleBook.classList.add("title");
  authorBook.classList.add("author");
  pagesBook.classList.add("pages");
  readButtonCheckbox.setAttribute("type", "checkbox");
  readButtonCheckbox.classList.add("readCheckbox");
  readText.htmlFor = "readCheckbox"
  divBook.setAttribute("class", book.title);
  divBook.classList.add("bookId");
  readText.innerHTML = "read";
  titleBook.innerHTML = book.title;
  authorBook.innerHTML = book.author;
  pagesBook.innerHTML = book.pages;
  divBook.appendChild(titleBook);
  divBook.appendChild(authorBook);
  divBook.appendChild(pagesBook);
  divBook.appendChild(readText);
  divBook.appendChild(readButtonCheckbox);
  bookContainer.appendChild(divBook);
}
