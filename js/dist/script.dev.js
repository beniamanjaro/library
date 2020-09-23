"use strict";

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

var oneThousandAndEightyFour = new book("1984", "George Orwell", "300", "readingsss");

function titleCase(str) {
  var words = str.split(" ");
  return words.map(function capitalize(word) {
    var wordLower = word.toLowerCase();
    return wordLower.charAt(0).toUpperCase + wordLower.slice(1);
  });
}

console.log(titleCase("I'm a little tea pot"));