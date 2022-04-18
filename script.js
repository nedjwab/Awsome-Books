
//Get Html elements
let form=document.querySelector("#add-books");
let booksList=document.querySelector(".Books-list");
let Title=document.querySelector("#titleInput").value;
let Author=document.querySelector("#authorInput").value;
let add=document.querySelector(".Add-button");

//intialize array
let Books =[];
let id = Books.length;

//Create Array of books
class Book {
    constructor (name,author) {
        this.name=name;
        this.author=author;
        id += 1;
    }   
}
form.addEventListener('submit',(e) => {
    e.preventDefault();
    Title=form.Title.value;
    Author=form.Author.value;
    let book =new Book(Title,Author);
    Books.push(book);
    booksList.innerHTML += ` <p id="title">${Title}</p>
    <p id="author">${Author}</p>
    <button type="submit" class="remove-button">Remove</button>
    <hr>` 
    localStorage.Books = JSON.stringify(Books);
  } 
);

ReloadBook();

//Reload function
function ReloadBook() {
    Books = JSON.parse(localStorage.Books);
    for (let i = 0; i < Books.length; i += 1) {
      // eslint-disable-next-line no-use-before-define
      booksList.innerHTML += ` <p id="title">${Books[i].name}</p>
      <p id="author">${Books[i].author}</p>
      <button type="submit" class="remove-button">Remove</button>
      <hr>` 
    }
  }
 
  ReloadBook() 