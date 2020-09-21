class Student{
    constructor(fname,lname,dob){
        this.firstname=fname,
        this.lastname=lname,
        this.dateOfBirth=dob
    }

    calculateage(){
        let brt=new Date(this.dateOfBirth);
        let diff=Date.now()-brt.getTime();
       
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear()-1970);
    }
}
student=new Student("sourav","das","10-12-1995");
console.log(student.calculateage());