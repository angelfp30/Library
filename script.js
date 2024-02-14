const dialog = document.querySelector('dialog');
const newBook = document.querySelector('.add');
const closeDialog = document.querySelector('.close-dialog')
const bookName = document.querySelector('#book-title');
const author = document.querySelector('#author-name');
const pages = document.querySelector('#num-pages');
const readStatus = document.querySelector('#read');


const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

newBook.addEventListener("click", () =>{
    dialog.showModal();
})
closeDialog.addEventListener("click", () =>{
    bookName.value = '';
    author.value = '';
    pages.value = '';
    readStatus.checked = false;
    dialog.close();
})