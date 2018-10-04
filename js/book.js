function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};


//Purpose: Takes in an object that can have some or all of the following
// fields {title:”string” , author:”string”, numberOfPages: number} and edits the Book with the values provided
//Return: returns the edited book object

Book.prototype.editBook = function(oBook){
  var tTitle = oBook.title;
  var tAuth = oBook.author;
  var tNum = oBook.numberOfPages;
  if (typeof(tTitle) === "string" && typeof(tAuth) === "string" && typeof(tNum) === "number"){
    this.title = tTitle;
    this.author = tAuth;
    this.numPages = tNum;
  } else {console.log("Invalid value type, check that title and author are strings and page number is a number.")}
  return this;
};

// Book.prototype.testfx = function(){
//   var testStr = "test";
//   var testNum = 0;
//
//   testStr = 0;
//   testNum = "test";
//   console.log("testStr: " + testStr + "\n" + "testNum: " + testNum);
//   console.log(this.title);
//   this.title = "editedBook";
//   console.log(this.title);
// }


// vvvvvvvv preloaded books for testing vvvvvvv
var fakebook1 = new Book("fakebook1", "fakeAuth1", 1, new Date("September 1, 1979"));
var ringworld = new Book("RingWorld", "Larry Niven", 342, new Date("October 1, 1980"));
var fakebook2 = new Book("fakebook2", "fakeAuth2", 2, new Date("November 1, 1981"));
var fakebook3 = new Book("fakebook3", "fakeAuth2", 3, new Date("December 1, 1982"));
