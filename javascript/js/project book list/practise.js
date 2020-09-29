let form = document.querySelector("#bookForm");
let bookLst = document.querySelector('#bookList');

class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor(){

    }

    addtobooklist(book){
        console.log(book);
        let bookLst = document.querySelector('#bookList');
        let trow = document.createElement('tr');
        trow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#">X</td>`
        bookLst.appendChild(trow);

    }

    clearfield(){
    document.querySelector('#title').value = '';
   document.querySelector('#author').value = '';
   document.querySelector('#isbn').value = '';
    }
    showalert(message,classname){
        let div = document.createElement('div');
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector("#bookForm");
        container.insertBefore(div,form);

        setTimeout(()=>{
            document.querySelector('.alert').remove();
        },3000);
    }
    deletebook(target){
        if(target.hasAttribute("href")){
            let elment = target.parentElement.parentElement;
           // console.log(elment);
          confirm("are u sure");
          elment.remove();
          // UI.showalert("")
        }
    }
}
// evnet listener
form.addEventListener('submit',addbooks);
bookLst.addEventListener('click',removebook);

function addbooks(e){

    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;
    let ui = new UI();

    if(title === '' || author === '' || isbn === ''){
       ui.showalert("please input all","error")
    }else{
        let book = new Book(title,author,isbn);
        //console.log(book);
        
        ui.addtobooklist(book);
    
        ui.clearfield();
        ui.showalert("succesful","success")
    }




    e.preventDefault();
}
function removebook(e){
    ui = new UI();
    ui.deletebook(e.target);
}