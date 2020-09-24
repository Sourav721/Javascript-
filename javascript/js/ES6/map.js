// Maps
let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Bohubrihi']
    ]
);

// Add
myMap.set('third key', 'Hello Wolrd!');

//console.log(myMap.get('second key'));
//console.log(myMap.has('key'));
//console.log(myMap.size);

// Iterate

// for (let x of myMap) {
//     console.log(x);
// }

// for (let [x,y] of myMap) {
//     console.log(x, y);

// }

// for (let x of myMap.keys()) {
//     console.log(x);
// }

// for (let x of myMap.values()) {
//     console.log(x);
// }

// for (let x of myMap.entries()) {
//     console.log(x);
// }

// myMap.forEach((x, y) => {
//     console.log(x,y);
    
// })
//let arr = Array.from(myMap);
//let arr = Array.from(myMap.keys());
let arr = Array.from(myMap.values());
console.log(arr);