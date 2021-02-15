// array destructuring
const numbers = [17, 15, 21, 25];
const [num1, num2] = numbers;
console.log(num1, num2);

function displayId(id)
{
    return [id, id + 2];
}
console.log('ids', displayId(7));

const [id1, id2] = displayId(17);
console.log('id1', id1);
console.log('id2', id2);
// *********************************************************************************************************************
// object destructuring
const person = { id: 17, name: 'Niam', age: 24, isStudent: true };
const { name, age, id } = person;
console.log(name, age, id);

// create object using destructuring
const fullName = 'Niam Md. Affan';
const dept = 'CSE';
const myData = { fullName, dept };
console.log(myData);
// *********************************************************************************************************************
// three dots (to make a new array with previous array items with another item)
const newNumbers = [...numbers, 10, 12];
console.log(newNumbers);
