let ages = [10, 15, 21, 23, 28, 34];
let newAges = [...ages, 34, 35];
console.log(newAges);

let student1 = {
    name1: 'asad',
    id1: 15,
}
let student2 = {
    name2: 'jamil',
    id2: 25,
}

console.log({ ...student1, ...student2 });