let name = "sourav";
let newname = [...name];//return array and split all member
console.log(newname);

// to combined array in one array

let  fruit1 =['apple','mango','orange'];
let fruit2 = ['grape','malta'];
let fruit3 = "jackfruit";
let newfruit = [...fruit1,...fruit2,fruit3];
console.log(newfruit);

//sread operator in function

let person = ["sourav","das"];
let fullname = (fname,lname)=>{
    console.log(fname,lname);
}
fullname(...person);//3dots assigns person value to function parameters

let num=[10,45,32,-2,67];
console.log(Math.max(...num));// 3dots use for iterate all member in array
console.log(Math.min(...num));

//sread operator in object

let person1 = {
    fname:"sourav",
    lname:"das"
}
let newperson1 = {...person1};//it generally return a object
console.log(newperson1);
let person2 ={...person1,dob:"10-12-1995"};//we can add a property like this
console.log(person2);


