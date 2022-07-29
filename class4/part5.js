//Exercise : FizzBuzz With Ternary Operators
/*const number = 14
if (number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz');
}else if( number % 3 === 0 ){
    console.log("Fizz");
}else if (number % 5 === 0){
    console.log('Buzz');
}else{
    console.log('Nothing');
}
*/

//Ternary Operators
console.log((number % 3 === 0 && number % 5 === 0) ? "FizzBuzz":( number % 3 === 0 ) ? "Fizz":(number % 5 === 0) ? "Buzz": "Nothing!!!");

//no differance structural deference
console.log(
    (number % 3 === 0 && number % 5 === 0) 
    ? "FizzBuzz":
    ( number % 3 === 0 )
    ? "Fizz":
    (number % 5 === 0) 
    ? "Buzz": "Nothing!!!");
 
