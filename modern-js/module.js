// named import
import { pi, r as radius } from './external.js'
const circle = pi * (radius * radius);
console.log(circle);

// import all if we don't know 
import * as data from './external.js' // import all
const circle = data.pi * (data.r * data.r);
console.log(circle);
console.log(data.student);

// default import
import external, { pi } from './external.js';
console.log(external, pi);

// function import
import { hello } from './external.js';
console.log(hello());

// import external from './external.js'
// console.log(external());