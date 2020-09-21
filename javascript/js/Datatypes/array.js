var x =["sourav","sathi","chomok","sopnil"];
x.push("love");
document.write(x+"<br>");

x.pop("love");
document.write(x+"<br>");

x.shift("sourav");
document.write(x+"<br>");

x.unshift("mylove");
document.write(x+"<br>");

 z ="sourav,sathi,chomok,sopnil";
y=z.split(",");
console.log(y);

b=x.join("/");
console.log(b);

x.sort();
x.reverse();
