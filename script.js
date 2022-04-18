
//Get Html elements
let form=document.querySelector("#addForm");
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
    <button type="submit" class="remove-button" onclick="removeBook(this)>Remove</button>
    <hr>` 
    localStorage.Books = JSON.stringify(Books);
  }
  
    
);
