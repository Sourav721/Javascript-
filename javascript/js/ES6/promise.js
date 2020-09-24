let prom = new Promise((resolve,reject)=>{
    let a;
    setTimeout(()=>{
     a = 1 + 2;
     if(a==2){
        resolve('succesful');
    }
    else{
        reject('failed');
    }

    },4000);
    
})
prom.then((message)=>{
    console.log("this from then" + message);
}).catch((message)=>{
    console.log("this from catch" + message);
});
console.log("this after promise");