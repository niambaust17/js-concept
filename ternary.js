// ternary operator (shortcut of conditional)
// condition ? if value : else value
const money = 90;
const userActive = true;
let food = money > 100 ? "Thai" : "Dal Vat";
console.log(food);

const userStatus = userActive ? 'active' : 'inactive';
// const userStatus2 = userActive ? displayUser() : hideUser();
// *********************************************************************************************************************
const num = -5;
const positiveOnly = num < 0 && 5; // for 5(false), for -5(5) (if condition true then execute next, if condition false then don't execute)
console.log(positiveOnly);

const positiveOnly2 = num < 0 || 'Positive'; // for 5(Positive), for -5(true) (if condition false then execute next, if condition true then don't execute)
console.log(positiveOnly2);
// *********************************************************************************************************************
// string to number
const number = '5';
console.log(+number);

// number to string
const number2 = 17;
console.log(number2 + '');
// *********************************************************************************************************************
// default parameter
function add(num1, num2 = 5)
{
    return num1 + num2;
}
console.log(add(5));
console.log(add(5, 10));
// *********************************************************************************************************************
// object value and keys
const student = {
    name: "Abir",
    id: 10,
    gender: "Male",
    dept: "CSE",
    district: "Khulna"
}
console.log(Object.keys(student));
console.log(Object.values(student));

// object entries
for (const [key, value] of Object.entries(student))
{
    console.log(`${ key }: ${ value }`);
}
// *********************************************************************************************************************
// using multiple array create a new array
const studentNames = ["abif", "jabbar", "rahim", "kalam"];
const newStudentNames = ["john", "fojlu", "montu", "chintu"];
const oldStudentNames = ["potol", "petla"];
const allStudentNames = [...studentNames, "rehana", ...newStudentNames, ...oldStudentNames, "hasib"];
console.log(allStudentNames);
// *********************************************************************************************************************
// optional chaining(?.)
const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        food: {
            liquid: "milk",
            hard: "fish",
        },
    }
};
console.log(adventurer.cat?.food?.hard);
console.log(adventurer.cat?.color); // if value not exist then it gives undefined
// *********************************************************************************************************************
// toggle boolean value
let active = false;
active = !active;
console.log(active);