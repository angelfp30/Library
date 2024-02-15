const dialog = document.querySelector('dialog');
const newBook = document.querySelector('.add');
const closeDialog = document.querySelector('.close-dialog')
const bookName = document.querySelector('#book-title');
const author = document.querySelector('#author-name');
const pages = document.querySelector('#num-pages');
const readStatus = document.querySelector('#read');
const getBookData = document.querySelector('.confirm');
const content = document.querySelector('.content');
//array to store the books
const myLibrary = [];

function Book(bookTitle, authorName, numPages, read) {
  // the constructor...
    this.bookTitle = bookTitle;
    this.authorName = authorName;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
  // doing stuff here
    const book = new Book(
        bookName.value,
        author.value,
        pages.value,
        readStatus.checked ? "Read" : "Not read"
        );
    myLibrary.push(book);
    
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        
        // Add book details to the card
        card.innerHTML = `
            <div class="book-name">Book: ${book.bookTitle}</div>
            <div class="author">Author: ${book.authorName}</div>
            <div class="pages">Pages: ${book.numPages}</div>
            <div class="read-status">${book.read}</div>
            <button class="delete">Delete</button>
        `;
        
        // Append the card to the content container
        content.appendChild(card);
        clearValues();
}

newBook.addEventListener("click", () =>{
    dialog.showModal();
})
getBookData.addEventListener("click", (event) =>{
    event.preventDefault();
    dialog.close(
        bookName.value,
        author.value,
        pages.value,
        readStatus.checked ? "Read" : "Not read");
})
dialog.addEventListener("close", (e) =>{
    dialog.returnValue === "" ? clearValues() : addBookToLibrary();
})

closeDialog.addEventListener("click", () =>{
    dialog.returnValue = "";
    clearValues();
})
function clearValues() {
    bookName.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    dialog.close();
}