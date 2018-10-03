function Library(){
  this.bookShelf = new Array();
};

//grabs fist full of hair


Library.prototype.addBook = function (book){
  //rips hair out
  var bookBool;
  function bookChk(b){
    return b === book;
  };
  // not even sure if this results in a bool but it works
  bookBool = gLibrary.bookShelf.find(bookChk);
  console.log("bookchck started");
  if (!bookBool){
    gLibrary.bookShelf.push(book);
    console.log("bookchk true, " + book.title + " pushed."); // kinda ghetto, book.title only works because it was pushed. probably not optimal, should correct in the future.
    return true;
  } else {
    console.log("bookchk false, book not pushed.");
    return false;
  }
  //invests in bosley
  //waits for hair to grow back
};

// syntatical book-b-gone
Library.prototype.removeBookByTitle = function (title){
  var index = gLibrary.bookShelf.findIndex(function(b){
    console.log("rmvBbyTtl mini function ran on: " + title);
    return b.title === title;
  });
  if (index === -1){
    console.log(title + " was not found. index: " + index);
    return false;
  } else {
    gLibrary.bookShelf.splice(index,1);
    console.log(title + " removed. index: " + index);
    return true;
  }
};


Library.prototype.removeBookByAuthor = function (authorName){
  var index;
  var booksRemoved = 0;

  function findAuth(){
    index = gLibrary.bookShelf.findIndex(function(b){
      // console.log("rmvBbyAuth mini function ran on: " + authorName);
      return b.author === authorName;
    });
  };
  findAuth();
  if (index === -1){
    console.log(authorName + " was not found. index: " + index);
    return false;
  } else {
    while (index !== -1){
      gLibrary.bookShelf.splice(index,1);
      booksRemoved ++;
      // console.log("index: " + index);
      findAuth();
    }
    console.log(booksRemoved + " Book(s) by " +authorName+ " Removed.");
    return true;
  }
};

Library.prototype.getRandomBook = function (){
  
};

//VVVVV takes a fraction of a second to load VVVVV ====> debuging HELL!
document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});





//vvvvv for testing only vvvvvv
setTimeout(function(){

  gLibrary.addBook(fakebook1);
  gLibrary.addBook(ringworld);
  gLibrary.addBook(fakebook2);
  gLibrary.addBook(fakebook3);
},500);
