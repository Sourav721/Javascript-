let xhr = new XMLHttpRequest();
xhr.open("GET","data.json",true);
xhr.onload = function(){
    if(this.status===200){
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
}
xhr.send();

function jsonData(json_obj){
    let js_obj = JSON.parse(json_obj);
    //console.log(js_obj);
    for(x in js_obj.persons){
        let persons = js_obj.persons;
        //console.log(persons[x]);
        for(y in persons[x]){
            console.log(persons[x][y]);
        }
    }
}