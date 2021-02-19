function ids(a, ...params)
{
    console.log(a, params) // return as a array
}
ids(1, 3, 5, 7, 9);

function ages()
{
    console.log(arguments); // return as a object
}
ages(2, 4, 6, 8);