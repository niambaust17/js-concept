function log(anything)
{
    return console.log(anything);
}

// create set
let mySet = new Set();

// set method
mySet.add(5).add(7).add(13);
mySet.add('Bangla');
let obj = {
    value: "Value",
    key: "Key",
}
mySet.add(obj);
mySet.delete('Bangla');
log(mySet);
log(mySet.has('Bangla'));
// mySet.clear()
log(mySet.size);

// set from array and string
let newArray = [1, 2, 3, 4, 5];
let setFromArray = new Set(newArray);
let setFromArray2 = new Set("Bangladesh");
log(setFromArray);
log(setFromArray2);

// set is iterable
for (let value of setFromArray2)
{
    log(value);
}

// array from set
log([...setFromArray]);
// log(Array.from(setFromArray));

// set uses 
// find all unique value from array
let ids = [1, 3, 5, 7, 3, 5, 2, 6, 7, 1];
// let idsSet = new Set(ids);
// log([...idsSet]);
log([...new Set(ids)]);

// set operation using set
let ab = new Set([1, 2, 3]);
let bc = new Set([4, 3, 2]);

let union = new Set([...ab, ...bc]);
log(union);

let intersection = new Set([...ab].filter(x => bc.has(x)));
log(intersection);

let difference = new Set([...ab].filter(x => !bc.has(x)));
log(difference);

// create weakset 
const ws = new WeakSet();

// weakset uses
class Student
{

    constructor()
    {
        ws.add(this);
    }
    method()
    {
        if (!ws.has(this))
        {
            throw new Error('You cannot access this method directly.');
        }
        else
        {
            return 'Hello';
        }
    }
}

const a = new Student(); // user forced for doing this way if we use weakset
log(a.method());

// log(Student.prototype.method()); // by this way we can access private property if we want to prevent it then we use weakset. 
