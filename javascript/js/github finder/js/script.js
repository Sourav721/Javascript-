let searchBtn = document.querySelector("#searchBtn");
let searchUser = document.querySelector("#searchuser");
let rep = document.querySelector("#reposBtn");
let ui = new UI();

searchBtn.addEventListener('click',searchitem);
rep.addEventListener('click',reposBtn);

function searchitem(e){
    let userText = searchUser.value;

    if(userText!=''){
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data =>{
            console.log(data);
           if(data.message == "Not Found"){
               //show alert
               ui.showAlert("profile not match","alert alert-danger");
           }
           else{
                // show profile
                ui.showprofile(data);
           }
        })
    }
   /*else if(userText!=''){
       fetch(`https://api.github.com/users/${userText}/repos`)
       .then(result => result.json())
       .then(data =>{console.log(data);})
   }*/
    else{
            //clear profile
            ui.clearProfile();
    }
    e.preventDefault();
}

function reposBtn(e){

    console.log("i love u");
   let userText = searchUser.value;
     fetch(`https://api.github.com/users/${userText}/repos`)
     .then(result => result.json())
     .then(data =>{
        console.log(data);
        data.forEach((data)=>{
         let datar= JSON.stringify(data);
         //console.log(datar);
         let repository = document.querySelector("#repos");
         repository.innerHTML=datar;
        })
    })

  /*  let xhr = new XMLHttpRequest(); [another way of api calling]
    xhr.open('GET',`https://api.github.com/users/${userText}/repos`,true);
    xhr.onload = function(){
        if(this.status=== 200){
            let data = this.responseText;
            data = data.JSON.parse(data);
            console.log(data);
        }
    }*/

e.preventDefault();
}