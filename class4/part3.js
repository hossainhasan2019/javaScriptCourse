// Ternary Operator

let number1 = 10;
let number2 = 2;

let maxValue;

// conditional operator 
if (number1 > number2){
   maxValue = number1; 
}else{
    maxValue = number2;
}

// short form
if(number1 > number2) maxValue = number1;
else maxValue = number2;

// StarT tarnary oprators Example
let max =(number1 > number2) ? number1 : number2;
console.log(max);

let number = 10;
console.log(number % 2 === 0 ? 'even': 'odd');
