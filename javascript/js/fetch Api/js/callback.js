let persons=[
    {fname:"sourav",lname:"das"},
    {fname:"sopnil",lname:"roy"}
];
console.log(persons[1].fname);

function create(person,callback){
    setTimeout(function(){
        persons.push(person);
        console.log(persons);
        callback();
    },1000);
}

function get(){
    setTimeout(function(){
        let output="";
        persons.forEach(function(person){
            output+=`<li>${person.fname} ${person.lname}</li>`;
        });
        document.getElementById("output").innerHTML= output;

    },500);
}


//  function create(person){
//      setTimeout(function(){
//          persons.push(person);
//          console.log(persons);
//      },1000);
//  }

//  function get(){
//      setTimeout(function(){
//          let output="";
//          persons.forEach(function(person){
//              output+=`<li>${person.fname} ${person.lname}</li>`;
//          });
//          document.getElementById("output").innerHTML= output;

//      },5000);
//  }
 create({fname:"chomok",lname:"das"},get);