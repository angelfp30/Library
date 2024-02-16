const dialog = document.querySelector('dialog');
const newBook = document.querySelector('.add');
const closeDialog = document.querySelector('.close-dialog')
const bookName = document.querySelector('#book-title');
const author = document.querySelector('#author-name');
const pages = document.querySelector('#num-pages');
const readStatus = document.querySelector('#read');
const getBookData = document.querySelector('.confirm');
const content = document.querySelector('.content');
const deleteCard = document.querySelector('.delete')
const cardReadStatus = document.querySelector('.read-or-not-read');
//Array to store the books
const myLibrary = [];

function Book(bookTitle, authorName, numPages, read) {
  // the constructor...
    this.bookTitle = bookTitle;
    this.authorName = authorName;
    this.numPages = numPages;
    this.read = read;
}

function addBookToLibrary() {
  // Entering the values from the form into the object
    const book = new Book(
        bookName.value,
        author.value,
        pages.value,
        readStatus.checked ? "Read " : "Not read "
        );
    myLibrary.push(book);
    
        const newCard = document.createElement('div');
        newCard.setAttribute('class', 'card');
        
        // Add book data to the card with HTML
        newCard.innerHTML = `
            <div class="book-name">Book: ${book.bookTitle}</div>
            <div class="author">Author: ${book.authorName}</div>
            <div class="pages">Pages: ${book.numPages}</div>
            <div class="read-status">
                <div class="read-or-not-read">${book.read}</div>
                <input type="checkbox" class="check" id="check">
            </div>
            <button class="delete">Delete</button>
        `;
        
        // Append the card to the content container
        content.appendChild(newCard);
        clearValues();
}
//Clearing the form after closing it or submitting the data
function clearValues() {
    bookName.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    dialog.close();
}
newBook.addEventListener("click", () =>{
    dialog.showModal();
})
getBookData.addEventListener("click", (event) =>{
    event.preventDefault();
    //The dialog closes but it submits the values from the form
    dialog.close(
        bookName.value,
        author.value,
        pages.value,
        readStatus.checked ? "Read" : "Not read");
})
//If the form is empty a card is not created
dialog.addEventListener("close", (e) =>{
    dialog.returnValue === "" ? clearValues() : addBookToLibrary();
})
//If the close button is clicked, it clears the whole data
closeDialog.addEventListener("click", () =>{
    dialog.returnValue = "";
    clearValues();
})
//The delete button was deleting its own card only with the default one
//This function allow it to delete any card in the main content
content.addEventListener("click", function(event) {
    if (event.target.classList.contains('delete')) {
        const card = event.target.closest('.card');
        card.remove();
    }
});
const checkbox = document.querySelector('.check')

checkbox.addEventListener("click", () =>{
    if (cardReadStatus.textContent == "Not Read ") {
        cardReadStatus.textContent = "Read "
    } else if (cardReadStatus.textContent === "Read "){
        cardReadStatus.textContent = "Not Read "
    }
})