function Library(){
  this.bookShelf = new Array();
};



// prob should use Library.bookShelf instead of Library.
Library.prototype.addBook = function (book){
  var bookBool;
  function bookChk(b){
    return b === book;
  }

  bookBool = Library.filter(bookChk);
  console.log(bookBool);
  if (bookBool){
    Library.push(book);
    return bookBool;
  } else {return false;}
};

Library.prototype.removeBookByTitle = function (title){

};


document.addEventListener("DOMContentLoaded", function(e){
  window.gLibrary = new Library();
});
