
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const library = [];

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    library.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
            <button class="toggle-read-button" data-index="${index}">Toggle Read</button>
        `;

        bookList.appendChild(bookCard);
    });
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    library.push(newBook);

    // Clear the form fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").checked = false;

    displayBooks();
}

function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    library[index].read = !library[index].read;
    displayBooks();
}

// Event listener for the "Add Book" button
const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", addBookToLibrary);

// Event listener for the "New Book" button
const newBookButton = document.getElementById("newBookButton");
const bookFormContainer = document.getElementById("bookFormContainer");
newBookButton.addEventListener("click", () => {
    bookFormContainer.style.display = "block";
});

// Event delegation for remove and toggle read buttons
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const index = event.target.getAttribute("data-index");
        removeBook(index);
    }

    if (event.target.classList.contains("toggle-read-button")) {
        const index = event.target.getAttribute("data-index");
        toggleReadStatus(index);
    }
});

// Display any books already in the library
displayBooks();