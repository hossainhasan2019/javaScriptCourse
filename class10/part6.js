// ES6 Module
//kivabe ekta js file a function rakhle onno js file theke access nia jay
//onno js file theke functon call kora jay
//export default  function name ;
//const addition = (num1 , num2) => num1 + num2;

//jodi ei error ta ase tahole html file a gia type = 'module likhe dite hobe
//and create package.json
//and json object e eita likhe save korte hobe{    "type": "module"}
//Cannot use import statement outside a module


//onno js file theke import kora
/*
import addition from './part6export.js';
console.log(addition(10,20));
*/


//import akka dhik function 
/*
import { addition, sub } from './part6export.js';

console.log(addition(10 ,10));
console.log(addition(10 ,20));

*/

// import function and re name and usage method
import { addition as add, sub } from './part6export.js';

console.log(add(10 ,10));
console.log(sub(10 ,20));

//end