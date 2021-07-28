//map

//it calls the fucntion for each elements in the array and returns the array of results

let flowers = ["rose", "lilly", "Tuilps"]

let result = flowers.map(item => item.length);

console.log(result);

result = flowers.map(item => item.toUpperCase());
console.log(result);

result = flowers.map(item => item.length>5);
console.log(result);