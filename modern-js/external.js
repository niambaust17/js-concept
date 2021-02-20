export const pi = 3.1416; // named export
export let r = 5;

export const student = {
    name: 'Masud',
    id: 18,
    dept: "ME",
    position: '5th'
}

const friends = ['a', 'b', 'c', 'd', 'e']; // default export. we can make only one default
export default friends;

export function hello() // function export
{
    return "Hello, Bangladesh";
}
