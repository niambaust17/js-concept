// variable
let name = 'Md. Affan';
const country = 'Bangladesh';
// *********************************************************************************************************************
// array
let ids = [17, 15, 19, 21, 25];
let friendsName = ['Emu', 'Pappu', 'Rifat', 'Moitry', 'Sudip'];
let product = [{ productName: 'laptop', price: 500 }, { productName: 'mobile', price: 300 }, { productName: 'watch', price: 100 }];
// *********************************************************************************************************************
// object
let student = {
    name: 'Rafiq',
    age: 34,
    address: {
        district: 'Dinajpur',
        area: 'Paherpur',
        ward: 10
    },
    marks: [75, 45, 80, 85, 70]
}
// *********************************************************************************************************************
// template string
let info = `${ student.name } lives in ${ student.address.district }. ${ student.name } buys a ${ product[0].productName } for $${ product[0].price }. ${ student.name } got ${ student.marks[2] } in Machine Learning.`;
console.log(info);
// *********************************************************************************************************************
// condition
if (student.age < 30)
{
    console.log('Hey dude');
}
else
{
    console.log('Hello Sir');
}
// *********************************************************************************************************************
// loop
for (let i = 0; i < friendsName.length; i++)
{
    const friendName = friendsName[i];
    console.log(friendName);
}
// *********************************************************************************************************************
// function
function add(num1, num2)
{
    return num1 + num2;
}
console.log(add(10, 7));
// *********************************************************************************************************************
// arrow function
const fullName = (firstName, lastName) =>
{
    return `${ firstName } ${ lastName }`;
}
console.log(fullName('Niam', 'Md. Affan'))

const doubleNum = number => number * 2;
console.log(doubleNum(5));

const sayBye = () => 'Good Bye';
console.log(sayBye());