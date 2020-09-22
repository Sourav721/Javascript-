// array destruction

let fruits=['apple','mango','orange'];

//let [fruit1,fruit2,fruit3]=fruits;
//console.log(fruit1,fruit2,fruit3);

 let display = ([fruit1,fruit2,fruit3]) =>{
     console.log(`fruits ${fruit1} ${fruit2} ${fruit3}`);
 }
 display(fruits);

 // object destruction

 let person = {
     fname:"Sourav",
     lname:"Das",
     dob:"10-12-1995"
 }

 //let {fname,lname,dob}=person;
 //let {fname:firstname,lname:lastname,dob:dateofBirth} = person; cahnge property name 
 //console.log(firstname,lastname,dateofBirth);
 function displayob({fname,lname,dob}){
     console.log(fname,lname,dob);
 }
 displayob(person);

 // swapping
 let a,b;
 a=20;b=30;
 [a,b]=[b,a];
 console.log(`a=${a} b=${b}`);

