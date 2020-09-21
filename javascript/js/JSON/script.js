var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "data.json", true);

xmlhttp.onload = function () {
    if (this.status == 200) {
        var data = this.responseText;
        //console.log(data);
        jsonData(data);
    }
};
xmlhttp.send();
 
function jsonData(json_obj) {
    //console.log(json_obj);
    var js_obj = JSON.parse(json_obj);
    //console.log(js_obj);

    for (x in js_obj.persons) {
        //console.log(x);
      
        var persons = js_obj.persons;
        // console.log(persons[x]);
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }
        
    }
}