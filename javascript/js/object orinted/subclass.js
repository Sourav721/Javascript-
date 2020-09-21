class Person{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    grettings(){
        return `heloo ${this.fname} ${this.lname}`;
    }
}

class Customer extends Person{
    constructor(fname,lname,pn,age){
        super(fname,lname);
        this.ph=pn;
        this.dob=age;
    }
}
let person = new Person("sourav","das");
let custm=new Customer("sourav","das","0176576876",24)
console.log(custm);;