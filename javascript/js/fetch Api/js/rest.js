document.getElementById('getData').addEventListener("click",getdata);
function getdata(){
    fetch('http://api.icndb.com/jokes/random/')
    .then(res => res.json())
    .then(data => {
        let output = data.value.joke;
        //console.log(output);
        document.getElementById("output").innerHTML=output;
    })
}