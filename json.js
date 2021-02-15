const person = {
    name: 'niam',
    age: 24,
    id: 17,
    dept: 'CSE',
    status: 'Student'
}
// object to JSON
const data = JSON.stringify(person)
console.log(data);

// JSON to object
console.log(JSON.parse(data));

// local storage

// set value 
localStorage.setItem('userId', 170101017);

// get value
console.log(localStorage.getItem('userId'));

// set object in local storage
localStorage.setItem('person', data);

// get object from local storage
console.log(JSON.parse(localStorage.getItem('person')));

// key of local storage object
console.log(Object.keys(JSON.parse(localStorage.getItem('person'))));

// value of local storage object
console.log(Object.values(JSON.parse(localStorage.getItem('person'))));