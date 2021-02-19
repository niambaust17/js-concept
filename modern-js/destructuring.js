// object destructuring
const user = {
    name: 'Babu',
    age: 27,
    isMarried: true,
    address: {
        district: 'Dinajpur',
        division: 'Rangpur',
        area: 'Paherpur'
    }
}
const { age, address: { area } } = user;
console.log(age, area);

// nested object destructuring
const { age: userAge, address: { area: userArea } } = user;
console.log(userAge, userArea);

// set default object if value not exist otherwise error
const { age, address: { area } = {} } = user;
console.log(age, area);

// array destructuring
const id = [1, 3, 4, 5, 6, 7];
const [a, b] = id; // 1 3
console.log(a, b);

const [, a, , , , b] = id; // 3 7
console.log(a, b);

// nested array destructuring
const id2 = [1, 3, 4, [50, 100, 150], 5, 6, 7];
const [, a, , [, , b]] = id2; // 3 150
console.log(a, b);

// swap

let num1 = 7;
let num2 = 5;

[num2, num1] = [num1, num2]

console.log(num1, num2);