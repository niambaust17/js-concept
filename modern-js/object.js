let subject1 = 80;
let subject2 = 75;
let totalMarks = subject1 + subject2;
let student = {
    name: 'niam',
    id: 17,
    dept: 'CSE',
    isEmployee: false,
    subject1, // subject1: subject1
    subject2,
    totalMarks
}

const keys = Object.keys(student);
const values = Object.values(student);
const entry = Object.entries(student);

console.log(keys);
console.log(values);
console.log(entry);