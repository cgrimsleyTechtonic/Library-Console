function Book(title, author, numPages, pubDate){
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.pubDate = pubDate;
};

Book.prototype.editBook = function(oBook){

};


// vvvvvvvv preloaded book for testing vvvvvvv
var fakebook1 = new Book("fakebook1", "fakeAuth1", 2, "fakeDate1");
var ringworld = new Book("RingWorld", "Larry Niven", 342, "October 1980");
var fakebook2 = new Book("fakebook2", "fakeAuth2", 2, "fakeDate2");
var fakebook3 = new Book("fakebook3", "fakeAuth2", 2, "fakeDate2");
