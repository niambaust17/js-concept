let age = 13;
let password = 1234;

// if else condition checking
const ageStatus1 = age > 18 ? "Adult" : "Young";

// if else if else condition checking
const ageStatus2 = age > 18 ? "Adult"
    : age > 12 ? "Young"
        : age > 5 ? "Child"
            : "Baby";
console.log(ageStatus1, ageStatus2);

// if condition only return true or false then we write it simply as below example
const passwordMatching = password === 1234;
console.log(passwordMatching); 
