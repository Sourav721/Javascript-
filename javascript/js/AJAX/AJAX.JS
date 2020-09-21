document.getElementById("get_data").addEventListener('click',loadpage);
function loadpage(){
   // console.log("clicked");
   let xhr = new XMLHttpRequest();
   xhr.open("GET","data.txt",true);
   xhr.onload = function(){
       if(this.status===200){
          document.getElementById("output").innerHTML=`<h2>${this.responseText}</h2>`
       }
   }
   xhr.send();
}