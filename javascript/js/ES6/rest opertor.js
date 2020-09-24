//rest oprator in array
let  fruits =['apple','mango','orange','grape','malta'];
let [fruit1,fruit2,...fruit3]=fruits;
console.log(fruit1,fruit2,fruit3);
////rest oprator in object
let person1 = {
    fname:"sourav",
    lname:"das",
    dob:"10-12-1995"
}

let {fname,...lname}=person1;
console.log(fname,lname);

//rest and spread oprator in function
let num =[2,4,5,6,7,86,];
let name = "sourav";

function test(name,number,...num1){
    console.log(name);
    console.log(number,num1);
}
test(name,...num);