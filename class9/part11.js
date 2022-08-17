//Array Join 
//[1,2,3]
//123 
//1,2,3 usage a separator 
//1-2-3 usage a separator 


// array to string a convert kora 
//join method a
let numbers = [1,2,3];
let joinArray = numbers.join('-');

console.log(joinArray)


//split and join method 
//convert string to array and separeate array for 
let message = 'we are learning Array join method';
console.log(message);

//string to array convert
const arrayOfMessage = message.split(' ');

console.log(arrayOfMessage);

//eikhae o - dia separate kora holo 
//real life a eita kaje lage url a - dite hoy space dia jay na
console.log(arrayOfMessage.join('-'));
