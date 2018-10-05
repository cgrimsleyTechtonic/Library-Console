function Library(){
  this.bookShelf = new Array();
}




Library.prototype.addBook = function (book){
  for(var i=0; i<this.bookShelf.length; i++) {
      if(this.bookShelf[i].title === book.title){
        console.log('book not added');
        return false;
      }
    }
    this.bookShelf.push(book);
    console.log('book added');
    this.store();
    return true;
};

// syntatical book-b-gone
Library.prototype.removeBookByTitle = function (title){
  var index = this.bookShelf.findIndex(function(b){
    // console.log("rmvBbyTtl mini function ran on: " + title);
    return b.title === title;
  });
  if (index === -1){
    console.log(title + " was not found. index: " + index);
    return false;
  } else {
    this.bookShelf.splice(index,1);
    console.log(title + " removed. index: " + index);
    this.store();
    return true;
  }
};



Library.prototype.removeBookByAuthor = function (authorName){
  var index;
  var booksRemoved = 0;
  //VVV hacky way VVV used to correct context for the findauth fx
  var _self = this;
// find auth function
  function findAuth(){
    index = _self.bookShelf.findIndex(function(b){
      // console.log("rmvBbyAuth mini function ran on: " + authorName);
      return b.author === authorName;
    });
  }
  // called auth fx for first time
  findAuth();
  // did the logic backwards on this, really more a style pref than anything.
  if (index === -1){
    console.log(authorName + " was not found. index: " + index);
    return false;
  } else {
    //while loop to check for multiple instances of same auth
    while (index !== -1){
      this.bookShelf.splice(index,1);
      booksRemoved ++;
      // console.log("index: " + index);
      //re call auth fx to check for other instances by the same auth
      findAuth();
    }
    console.log(booksRemoved + " Book(s) by " +authorName+ " Removed.");
    this.store();
    return true;
  }
};

Library.prototype.getRandomBook = function (){
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var bookCnt = this.bookShelf.length;
  console.log("book count: " + bookCnt);
  if (bookCnt > 1){
    var bookLottery = getRandomInt(bookCnt);
    console.log("Book Lottery winnner: " + bookLottery);
    return this.bookShelf[bookLottery];
  } else{
    return null;
  }
};




//retrun all books that completely or partially match the string title passed into the function (indexof or regexp would help here)
//returns an array of book objects if you find books with matching titles, empty array if no books are found.
Library.prototype.getBookByTitle = function (title){
  // dropped /g for now, it searches globally (finds all matches insteadof 1) but im iterating with a loop so may not need it.
  var str = new RegExp(title,"i");
  // console.log("var: " + str);
  var tempArray = [];

  for (var i=0; i < this.bookShelf.length; i++ ){
    var arrValueToSearch = this.bookShelf[i].title;
    // console.log(arrValueToSearch);
    // console.log(str.test(arrValueToSearch));
    if (str.test(arrValueToSearch)){
      tempArray.push(arrValueToSearch);
      // console.log("ran if on "+ arrValueToSearch);
    }
  }
  return tempArray;
};

//  finds all books where the authors name partially or completely matches the authorName arg passed to the fx
// returns an array of books if you find books with matching authors, empty array if no books match
Library.prototype.getBookByAuthor = function (authorName){
  var str = new RegExp(authorName,"i");
  var tempArray = [];
  // #winning #tigerblood
  for (var i=0; i < this.bookShelf.length; i++ ){
    var arrValueToSearch = this.bookShelf[i].author;
    var arrValueToReturn = this.bookShelf[i].title;
    if (str.test(arrValueToSearch)){
      tempArray.push(arrValueToReturn);
    }
  }
  return tempArray;
};

//Takes multiple books, in the form of an array of book objects, and adds the objects to your books array
//return number of books successfully added, 0 if no books were added
Library.prototype.addBooks = function (books){
  var booksAdded = 0;
  for (var i = 0; i < arguments.length; i++){
    if (this.addBook(arguments[i])){
      booksAdded ++;
    }
  }
  console.log("Books Added: " + booksAdded);
  return booksAdded;
};

//Find the distinct authors’ (single instance of each author) names from all books in your library
//array of strings the names of all distinct authors, empty array if no books exist or if no authors exist
// i dont understand what i did here as well as i should. I probably underutilized the .some method.
Library.prototype.getAuthors = function (){
  var tempArray = [];
  var i;
  for (i = 0; i < this.bookShelf.length; i++){
    var tempAuth = this.bookShelf[i].author;
    // Checks if temparray has the author already, if so it skips to the next auth in the loop.
    // if the auth is found in the temp array, it returns true and is modified to evaluate false with a !
    // so that the author is not pushed. If no auth match is found it evals to false which is flipped to true
    // by a ! which pushes the auth.
    if (!tempArray.some(function(a){return a === tempAuth;})){
      tempArray.push(tempAuth);
    }
  }
  return tempArray;
};

//Retrieves a random author name from your books collection
//Return: string author name, null if no books exist
Library.prototype.getRandomAuthorName = function (){
  var bookHolster = null;
  var bookAuth;
  // console.log(bookAuth);
  if (this.bookShelf.length > 0){
    bookHolster = this.getRandomBook();
    bookAuth = bookHolster.author;
    return bookAuth;
  } else
  {
    return bookHolster;
  }
};

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV helper stuffs VVVVVVVVVVVVVVVVVVVVVVVVVVVVV
Library.prototype.store = function(){
  var tempShelf = JSON.stringify(this.bookShelf);
  localStorage.setItem("overStockShelf", tempShelf);
  // console.log("saved");
};

Library.prototype.get = function(){
  var returnTray = JSON.parse(localStorage.getItem("overStockShelf"));
  for (var i = 0; returnTray.length > i; i++){
    this.addBook(new Book(returnTray[i]));
  }
  console.log("Library loaded.");
  return this.bookShelf;
};
// need to automate loading .. ..
// also dont try to load if no library exists in localStorage, need logic to mitigate this.



// VVVVVVVVVVVVVVVVVVVVVVVVVVVVV some custome stuff VVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// bork it
Library.prototype.nukeLibrary = function (){
  var r = confirm("Are you sure you want to Nuke the entire Library? \n Does not affect localStorage.");
  if (r === true){
    this.bookShelf = [];
    alert("You Borked It! \n Edam tuum anima!");
  } else { alert("Disaster Averted!");}
  return console.log("You rand a command that you shouldn't have.");
};
//initiate laziness
Library.prototype.fireAutoLoad = function (){
  this.addBooks(ringworld, fakebook2, fakebook3, fakebook1,seeSpotRun);
  return console.log("autoload success");
};
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^some custome stuff ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//NOTES: should normalize text in addbook with tolower method, other areas may require this as well.
//



//VVVVV takes a fraction of a second to load VVVVV ====> debuging HELL!
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
  // gLibrary.fireAutoLoad();
  //need to test if their is a library that exists before loading. if not should call my fireAutoLoad
  gLibrary.get();
});
