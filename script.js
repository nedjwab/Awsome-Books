let Books = [];

// Book Div and Template const
const temp = document.querySelector('.book');
const bookshelf = document.querySelector('#bookshelf');

const submit = document.querySelector('#submit');
let idBook = Books.length;

function Book(title, author) {
  this.id = idBook;
  this.title = title;
  this.author = author;
  idBook += 1;
}

function ReloadBooks() {
  Books = JSON.parse(localStorage.Books);
  bookshelf.innerHTML = '';
  bookshelf.appendChild(temp);
  for (let i = 0; i < Books.length; i += 1) {
    DisplayBook(Books[i]);
  }
}

function DeleteBook(id) {
  Books = Books.filter((book) => book.id !== id);
  localStorage.Books = JSON.stringify(Books);
  ReloadBooks();
}

function DisplayBook(book) {
  const BookList = temp.content.cloneNode(true);
  BookList.querySelectorAll('h2')[0].innerHTML = book.title;
  BookList.querySelectorAll('h2')[1].innerHTML = book.author;
  BookList.querySelector('button').addEventListener('click', () => { DeleteBook(book.id); });
  bookshelf.appendChild(BookList);
}

function SaveBook(title, author) {
  const book = new Book(title, author);
  if (!Array.isArray(Books)) {
    Books = [];
  }
  Books.push(book);
  localStorage.Books = JSON.stringify(Books);
  ReloadBooks();
}

function AddBook() {
  const formAddBook = document.forms.AddBook;
  const bookData = new FormData(formAddBook);
  const bookTitle = bookData.get('title');
  const bookAuthor = bookData.get('author');
  formAddBook.reset();
  SaveBook(bookTitle, bookAuthor);
}

submit.addEventListener('click', () => {
  AddBook();
});

// Load the Library on opening the page
ReloadBooks();
