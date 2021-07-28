//js set objects
//a set is acollection of unique values.
//a set can hold value of any type

//create set
const letters = new Set();

//add values to the set

letters.add('a');

letters.add('b');

letters.add('c');

letters.add('a');

console.log('Length: ' + letters.size);

let isExist = letters.has('a');

console.log(isExist);
//letters.clear(); //clare all objects


const numbers = new Set([1,3,4,5,6,7]);

numbers.add(12)
numbers.add(34);

console.log(numbers.size);
numbers.delete;