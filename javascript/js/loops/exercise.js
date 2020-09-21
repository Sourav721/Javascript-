let n =prompt("Enter the NUmber");
var power="";
sum=0;
for(i=1;i<=n;i++){
    power+=(i**2).toString();
    sum+=i**2;
    if(i==n){
        continue;}
        power+="+";
    
    
}
console.log(`${power}=${sum} `);