// js array method
let namesArray = ['niam', 'babu', 'chobi', 'mili', 'jhimli'];

// namesArray.copyWithin(3, 2); // [ 'niam', 'babu', 'chobi', 'chobi', 'mili' ]
// namesArray.copyWithin(4, 1, 2); // [ 'niam', 'babu', 'chobi', 'mili', 'babu' ]
namesArray.copyWithin(3); // [ 'niam', 'babu', 'chobi', 'niam', 'babu' ]
// namesArray.copyWithin(-4, -1, -2); // start always stay in left side otherwise not copy
console.log(namesArray);