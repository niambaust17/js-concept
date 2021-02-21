// European Computer Manufacturers Association (ECMA) defines standard of js
// ES11

// globalThis
// node js don't have window object 
// for node js global.
// for browser window.
// to solve this problem globalThis comes
// window === globalThis(true for browser), global === globalThis(true for node js)
globalThis.setTimeout(() => console.log('Hello'), 100);



// BigInt data type
// 10n === BigInt(10) true, 10 === 10n false (because data type different so false)
let largestNumber = Number.MAX_SAFE_INTEGER;
largestNumber += 1;
largestNumber = BigInt(largestNumber) + 1n;
console.log(largestNumber, typeof largestNumber);



// optional chaining
// if any property not exist using it we get undefined otherwise it give us error
let student = {
    name: 'niam',
    id: 17,
    faculty: {
        dept: {
            floor: '4th'
        }
    }
}
console.log(student?.faculty?.dept?.floor);

let colors = ['red', 'blue', 'green'];
colors = null;
console.log(colors?.[2]);



// nullish coalescing operator
// if left side null or undefined then return right side
// || if left side contain falsy value then return right side
let hello;
console.log(hello ?? 'sorry');
// console.log((name.firstName || name.lastName) ?? 'Nothing');



// dynamic import
// (async function ()
// {
//     const { add } = await import('./utils.js');
//     const { remove } = await import('./utils.js');
//     add();
//     remove();
// })();

import('./utils.js')
    .then(({ add, remove }) =>
    {
        add();
        remove();
    });



// promise.allSettled
const promise1 = new Promise(resolve => resolve('burger'));
const promise2 = new Promise((_, reject) => reject('apple'));
const promise3 = new Promise(resolve => resolve('pizza'));

// if we use all then it only return rejected promise result
// Promise.all([promise1, promise2, promise3])
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// if we use allSettled then it return all promise result
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))
    .catch(error => console.log(error));



// string.prototype.matchAll method
const text = 'My favorite color is #FFFFFF and #000000';
const regex = /#?(?<group1>[\da-fA-F]{2})(?<group2>[\da-fA-F]{2})(?<group3>[\da-fA-F]{2})/g;

// const matches = text.match(regex);
// console.log(matches);

const matchesAll = text.matchAll(regex);
for (let match of matchesAll)
{
    console.log(match);
}

