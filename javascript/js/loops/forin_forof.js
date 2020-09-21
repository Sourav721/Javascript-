var sname = ["sourav","sathi","chomok","sopnil"];
var student = {
    name:"sourav",
    age:24,
    college:"SGC"
}
//return only index number
for(var x in student){
    console.log(`index ${x}:${student[x]}`);
}
//return only vlue
for(x of sname){
    console.log(`value ${x}`);
}