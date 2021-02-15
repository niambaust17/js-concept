let employees = ['Akbar', 'Rafiq', 'Saleh', 'Zabbar', 'Moshiur'];
let product = [
    { id: 1, productName: 'laptop', price: 500 },
    { id: 2, productName: 'mobile', price: 300 },
    { id: 3, productName: 'watch', price: 100 },
    { id: 4, productName: 'tablet', price: 150 }
];// this is array of object
//**********************************************************************************************************************
// add in last
employees.push('Zibon');
console.log(employees);
// *********************************************************************************************************************
// remove from last
employees.pop();
console.log(employees);
// *********************************************************************************************************************
// remove from first
employees.shift();
console.log(employees);
// *********************************************************************************************************************
// add in first
employees.unshift('Jeny');
console.log(employees);
// *********************************************************************************************************************
// length
console.log(employees.length);
// *********************************************************************************************************************
// index (if item not found return -1) (if found return index number of that item)
console.log(employees.indexOf(2));
console.log(employees.indexOf('Saleh'));
// *********************************************************************************************************************
// map on array (return items as a array)
const productNames = product.map(singleProduct => singleProduct.productName);
console.log(productNames);

// when we return a block of code then if we don't write return then it give us undefined
const productPrices = product.map(productPrice =>
{
    return productPrice.price;
});
console.log(productPrices);
// *********************************************************************************************************************
//filter on array (return items as a array)
const lowCostProduct = product.filter(singleProductCost => singleProductCost.price < 300);
console.log(lowCostProduct);

// remove item using filter
const remaining = product.filter(productId => productId.id != 3);
console.log(remaining);
// *********************************************************************************************************************
// find on array (any specific item exist in the array or not)
const hasMobile = product.find(phone => phone.productName === "mobile");
console.log(hasMobile);
// *********************************************************************************************************************
// for each (return items)
product.forEach(element =>
{
    console.log(element.price);
});