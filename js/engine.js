function Library(){
  this.bookShelf = new Array();
};




Library.prototype.addBook = function (book){
  var bookBool;
  function bookChk(b){
    return b === book;
  }
  bookBool = gLibrary.bookShelf.find(bookChk);
  //console.log(bookBool);
  console.log("bookchck started");
  if (!bookBool){
    gLibrary.bookShelf.push(book);
    console.log("bookchk true, book pushed");
    return true;
  } else {
    console.log("bookchk false, book not pushed");
    return false;
  }
};

Library.prototype.removeBookByTitle = function (title){

};


document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
