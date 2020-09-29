//define ui 
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let taskFilter = document.querySelector('#task_filter');
let clearBtn = document.querySelector('#clear_task_btn');
let taskInput = document.querySelector('#new_task');

//define event
form.addEventListener('submit', addTask);
tasklist.addEventListener('click',remove);
clearBtn.addEventListener('click',clearelmnt);
taskFilter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded',gettasks);


//function
function addTask(e){
    if(taskInput.value === ''){
        alert('give something');
    }else{
        let value = document.createTextNode(taskInput.value+' ');
        let li = document.createElement('li');
        li.appendChild(value);
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        tasklist.appendChild(li);

        storeTaskInLS(taskInput.value);

        taskInput.value='';
       
    }
    e.preventDefault();
}
//remove element
function remove(e){
    if(e.target.hasAttribute('href')){
        if(confirm("ARE YOU SURE")){
            let rem = e.target.parentElement;
            rem.remove();

            removefromLs(rem);
        }
        
    }
    
}
//clear all element
function clearelmnt(e){
  //  tasklist.innerHTML=''; evabe o kora jay
  //faster way
  while(tasklist.firstChild){
      tasklist.removeChild(tasklist.firstChild);
  }
  localStorage.clear();
}
//filter or search
function filterTask(e){
    let text = e.target.value.toLowerCase();
    let li = document.querySelectorAll('li');
    li.forEach(task => {
        let item = task.firstChild.textContent;
        
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    })
}
//add task in local storage
function storeTaskInLS(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function gettasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let value = document.createTextNode(task+' ');
        let li = document.createElement('li');
        li.appendChild(value);
        let link = document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x'; 
        li.appendChild(link);
        tasklist.appendChild(li);
    })
}
function removefromLs(taskitem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    let li = taskitem;
    console.log(li.lastChild);
    li.removeChild(li.lastChild);
    
    tasks.forEach((task,index)=>{
        console.log(task,index);
        if(li.textContent.trim() === task){
            tasks.splice(index,1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}