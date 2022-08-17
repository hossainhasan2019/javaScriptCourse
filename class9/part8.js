//Array Method : every , some

const number = [1,2,3,4,5,6];

//dhonattok kina check korte 
//every method and callback function
//jodi ekta o rinattok valu pay tahole false return korbe

let res = number.every((sum) => sum > 0);

console.log(res);

// jodi kono ekta dhonatok hole true return korbe 
//sum method
console.log(number.some((sum) => sum > 0));

//ekhon amra dekbo kive ekta array er even or odd number ber kora jay
const even = [2,4,6,7];
let evenNumber = even.every((num) => num % 2 === 0);

console.log(evenNumber);
//ekta o jodi dhonnatok number pay tahole true return korbe
//some method and call back function
let oddNumber = even.some((num) => num % 2 === 0);
console.log(oddNumber);


