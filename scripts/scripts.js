/* A constructor for making 'Book' objects*/

function Book(title, auther, pages, read) {
    this.title = title
    this.auther = auther
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${title} by ${auther}, ${pages} pages, ${read}.`
    }
}

/*A function that can take user's input and store 
the new book objects into an array*/


