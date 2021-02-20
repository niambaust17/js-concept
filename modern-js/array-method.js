let numbers = [1, 21, 3, 41, 5, 61, 7, 8, 9, 10];

// find() method
let result = numbers.find(currentValue => currentValue > 15);
console.log(result);

// findIndex() method
let result2 = numbers.findIndex(currentValue => currentValue % 19 === 0);
console.log(result2);

// filter() method
let result3 = numbers.filter(currentValue => currentValue > 100);
console.log(result3);

// slice() method
let result4 = numbers.slice(2, 5); // [1, 21,| 3, 41, 5,| 61, 7, 8, 9, 10]
// let result4 = numbers.slice(-2, 9); // [1, 21, 3, 41, 5, 61, 7, 8,| 9,| 10]
console.log(result4);

// splice() method
let result5 = numbers.splice(2, 4, 5, 6, 7, 8); // [1, 21,| 3, 41, 5, 61,|(5, 6, 7, 8,) 7, 8, 9, 10] |remove| (add)
console.log(result5, numbers);

// concat() method
let numbers2 = [1, 3, 7];
let result6 = numbers.concat(numbers2);
console.log(result6);

// push() method
let result7 = numbers.push(14, 12, 13);
console.log(numbers, result7);

// map() method
let result8 = numbers.map(currentValue => currentValue * 2);
console.log(result8);

// reduce() method
let sum = numbers.reduce((previousValue, currentValue) => { return previousValue + currentValue }, 0);
console.log(sum);

// shift() method
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1); // [2, 3]
console.log(firstElement); // 1
