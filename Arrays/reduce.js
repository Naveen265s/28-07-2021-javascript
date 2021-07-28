//reduce 
let arr = [1,2,3,4,5]
// let value =arr.reduce(fucntion(accumulator, item,index, array){

// }, initial)

//accumulator is the result of the previous call, equal to initial
//item -item in the array
//index - index of the item
//array - is the array

// 0 1 1
// 1 2 3
// 3 3 6
// 6 4 10
// 10 5 15

let result = arr.reduce((sum,current) => sum + current, 0)

console.log(result);