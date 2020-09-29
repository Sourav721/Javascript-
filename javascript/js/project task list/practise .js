let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let taskFilter = document.querySelector('#task_filter');
let clearBtn = document.querySelector('#clear_task_btn');
let taskInput = document.querySelector('#new_task');

//event listener
form.addEventListener("submit",additem);
tasklist.addEventListener('click',removeitem);
 clearBtn.addEventListener('click',clearall);
 taskFilter.addEventListener('keyup',filetitem);

function additem(e){
    if(taskInput.value ===''){
        alert('add task');
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+" "));
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML="x";
        li.appendChild(link);
        tasklist.appendChild(li);
        taskInput.value='';
    }
    e.preventDefault();
}

function removeitem(e){
    if(e.target.hasAttribute('href')){
        if(confirm("Are You Sure")){
            let remove = e.target.parentElement;
            remove.remove();
        }
    }
}

function clearall(e){
   // tasklist.innerHTML='';
    while(tasklist.firstChild){
        tasklist.removeChild(tasklist.firstChild);
    }
    
}

function filetitem(e){
    console.log(e.target);
    let text = e.target.value.toLowerCase();
    console.log(text);
 let li = document.querySelectorAll('li');
 li.forEach( task =>{
     let item = task.firstChild.textContent;
     if(item.toLowerCase().indexOf(text)!= -1){
         task.style.display = 'block';
     }
     else{
        task.style.display = 'none';
     }
 })
}