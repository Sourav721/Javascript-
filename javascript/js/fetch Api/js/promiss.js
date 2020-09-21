// let persons=[
//     {fname:"sourav",lname:"das"},
//     {fname:"sopnil",lname:"roy"}
// ];
// console.log(persons[1].fname);

// function create(person){
//     let prom = new Promise(function(resolve,reject){
//         persons.push(person);
//         resolve();
//     })
   
// }

// function get(){
//     setTimeout(function(){
//         let output="";
//         persons.forEach(function(person){
//             output+=`<li>${person.fname} ${person.lname}</li>`;
//         });
//         document.getElementById("output").innerHTML= output;

//     },500);
// }
// create({fname:'chomok',lname:'das'}).tnan(get);




// Promises
// .then
let persons = [
    { firstName: "Simanta", lastName: "Paul" },
    { firstName: "Fazle", lastName: "Rahat" }
]

function createPerson(person) {
    let prom = new Promise(function (resolve, reject) {
        persons.push(person);
        let error = false;

        if (!error) {
            resolve();
        }
        else {
            reject('Error!: Something Wrong!');
        }

    });
    return prom;
}

function getPerson() {
    setTimeout(function () {
        let output = '';
        persons.forEach(function (person) {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({ firstName: "Rony", lastName: "Chy" })
    .then(getPerson)
    .catch(function (err) {
        console.log(err);
    });