function hello(text = 'Hi')
{
    return text;
}

console.log(hello()); // Hi
console.log(hello('Hey whats up')); // Hey whats up
console.log(hello(undefined)); // Hi
console.log(hello(null)); // null