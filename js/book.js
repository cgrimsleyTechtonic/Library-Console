// obsolete ......
// function Book(title, author, numPages, pubDate){
//   this.title = title;
//   this.author = author;
//   this.numPages = numPages;
//   this.pubDate = pubDate;
// }

// most bestest, more betters
function Book(obj){
  this.title = obj.title;
  this.author = obj.author;
  this.numPages = obj.numPages;
  this.pubDate = new Date(obj.pubDate);
}



//Purpose: Takes in an object that can have some or all of the following
// fields {title:”string” , author:”string”, numberOfPages: number} and edits the Book with the values provided
//Return: returns the edited book object

Book.prototype.editBook = function(oBook){
  var tTitle = oBook.title;
  var tAuth = oBook.author;
  var tNum = oBook.numPages;
  if (typeof(tTitle) === "string" && typeof(tAuth) === "string" && typeof(tNum) === "number"){
    this.title = tTitle;
    this.author = tAuth;
    this.numPages = tNum;
  } else {console.log("Invalid value type, check that title and author are strings and page number is a number.");}
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

// demo console log: gLibrary.addBook({title: "fakebook5",author: "fakeAuth4",numPages: 1,pubDate: "September 1, 1977"})
// vvvvvvvv preloaded books for testing vvvvvvv
var fakebook1 = new Book ({title: "fakebook1",author: "fakeAuth1",numPages: 1,pubDate: "September 1, 1979"});
var ringworld = new Book ({title: "RingWorld",author: "Larry Niven",numPages: 342,pubDate: "October 1, 1980"});
var fakebook2 = new Book ({title: "fakebook2",author: "fakeAuth2",numPages: 2,pubDate: "November 1, 1981"});
var fakebook3 = new Book ({title: "fakebook3",author: "fakeAuth2",numPages: 3,pubDate: "December 1, 1982"});
var seeSpotRun = new Book({title:"See Spot Run",author:"Jane",numPages:200,pubDate:2005});
