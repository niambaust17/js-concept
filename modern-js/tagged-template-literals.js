function modifier(strings, ...values)
{
    // console.log(strings); // [ 'Student-1 is ', '. Student-2 is ', '.' ]
    // console.log(values); // [ 'Mahi', 'Jakir' ]
    let newName = strings.reduce((prev, current) =>
    {
        return prev + current + (values.length ? "Mr. " + values.shift() : "")
    }, "")
    return newName;
}

const student1 = 'Mahi';
const student2 = 'Jakir';
console.log(modifier`Student-1 is ${ student1 }. Student-2 is ${ student2 }.`);
//Output: Student-1 is Mr. Mahi. Student-2 is Mr. Jakir.