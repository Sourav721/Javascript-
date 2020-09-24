
// Set
let mySet = new Set([1, 2, 2, 4, 4]);

// Add
mySet.add("Hello");
mySet.add(2);
// Delete
mySet.delete(4);

// Check
//console.log(mySet.has(4));
// Size
//console.log(mySet.size);

// Iterating Sets

// for (x of mySet.values()) {
//     console.log(x);
// }

// let iter = mySet.entries();

// console.log(iter.next());

// console.log(iter.next());

// console.log(iter.next());

// for (let [x] of mySet.entries()) {
//     console.log(x);
// }

let iter = [...mySet.values()];

//console.log(iter);

mySet.forEach(value => console.log(value));