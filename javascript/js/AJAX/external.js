

document.getElementById("get_data").addEventListener("click",loadpage);
 function loadpage(){
     let value = document.getElementById("getNum").value;
     console.log(value);
     let xhr = new XMLHttpRequest();
     xhr.open("GET",`http://api.icndb.com/jokes/random/${value}`,true);
     xhr.onload = function(){
         if(this.status===200){
             let data =JSON.parse(this.responseText);
             //console.log(data);
             let joke=(data.value);
             console.log(joke);
             let output="<ol>";
             joke.forEach(function(item){
                 output+=`<li>${item.joke}</li>`

             })
             output+="</ol>";


             document.getElementById("output").innerHTML=output;
         }
     }
     xhr.send();
 };