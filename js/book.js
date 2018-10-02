function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubData = pubDate;
};

Book.prototype.editBook = function(oBook){

};
var ringworld = new Book("RingWorld", "Larry Niven", 342, "October 1980");
