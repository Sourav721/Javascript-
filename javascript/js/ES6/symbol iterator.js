// ITERATOR 

let name = "sourav";
let iter = name[Symbol.iterator]();
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);
console.log(iter.next().value);

let  fruits =['apple','mango','orange','grape','malta'];
let iter2= fruits[Symbol.iterator]();
console.log(iter2.next().value);
console.log(iter2.next().value);
console.log(iter2.next().value);
console.log(iter2.next().value);

// Generators

function* genFunction() {
    console.log("I am some code");
    yield 1;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "Hello World";
}

let iter3 = genFunction();

console.log(iter3.next().value);
console.log(iter3.next().value);