
//add element

let item= document.createElement('li');
item.Classname="sourav";
item.Id="sourav1";
item.setAttribute('title','title belongs to');
text1=document.createTextNode("i love u sathi");
item.appendChild(text1);
console.log(item);
//document.querySelector('ul').appenChild(item);


//replace element

let old=document.querySelector('ul li:nth-child(2)');
console.log(old);
parent=old.parentElement;

//parent.replaceChild(item,old);

//remove element
parent.removeChild(old);
console.log(parent);
ulall.removeChild(old);
item.classList.remove("sourav");
item.removeAttribute("title");