//Get the UI elment
let form = document.querySelector("#bookForm");
let bookLst = document.querySelector('#bookList');

//book class

class BOOK{
    constructor(title,author,isbn){
        this.title = title;
        this.author= author;
        this.isbn = isbn;
         
    }
}
//ui class

class UI{
    
   static addToBookList(book){
        let list = document.querySelector("#bookList");
        let row = document.createElement('tr');
       // console.log(book.title);
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href ='#' class='delete'>x</a></td>`;
        list.appendChild(row);
    }
   static clearfeild(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';
    }
   static showalert(message,classname){
        let div = document.createElement('div');
        div.className=`alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector("#bookForm");
        container.insertBefore(div,form);

        setTimeout(() =>{
            document.querySelector('.alert').remove();
        },3000)

    }
   static deleteBook(target){
        if(target.hasAttribute('href')){
        target.parentElement.parentElement.remove();
        //console.log(target.parentElement.previousElementSibling.textContent.trim());
       STORAGE.removebooks(target.parentElement.previousElementSibling.textContent.trim());
        UI.showalert("book removed succesfully","success");
        }
    }
}

//local storage class

class STORAGE{
    static getitem(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books=JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static AddBooks(book){
        let books = STORAGE.getitem();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static displaybooks(book){
        let books = STORAGE.getitem();
        books.forEach(book =>{
            //console.log(book);
            UI.addToBookList(book);
        })
    }
    static removebooks(isbn){
        let books=STORAGE.getitem();
        console.log(books);
        books.forEach((book,index) =>{
            console.log(book);
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}

//event listener
form.addEventListener('submit',addbook);
bookLst.addEventListener('click',removeelement);
document.addEventListener('DOMContentLoaded',STORAGE.displaybooks());

//define function

function addbook(e){
    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;
    let book = new BOOK(title,author,isbn);
    // console.log(book);
    if(title==='' || author === '' || isbn === '' ){

        UI.showalert("please fill all the feilds!","error");

    }else{
        UI.addToBookList(book);
        UI.clearfeild();
        UI.showalert("succesful","success");
        STORAGE.AddBooks(book);
    }
   
    
    e.preventDefault();
}
function removeelement(e){
 UI.deleteBook(e.target);
 
 e.preventDefault();
}