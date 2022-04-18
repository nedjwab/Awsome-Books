
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
