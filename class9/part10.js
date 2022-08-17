// spread Oprator

const numbers = [1,2,3,4,5,6,7,8,9];

console.log(numbers);

//spread oprator dia array clone kora

const copiedArray = [...numbers]
console.log(copiedArray);

//concate kora spread oprator er maddhome
//eita object er sathe o kora jabe 

const num1 = [1,2,3];
const num2 = [4,5,6];

const num = [...num1, ...num2];
console.log(num);
