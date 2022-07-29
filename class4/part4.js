// problem: FizzBuzz
// Take a Number
// If it is divisible by 3, print Fizz
// If it is divisible by 5, print Buzz
// if it is divisible by both 3 & 5 , print FizzBuzz
// Other Wise , print Nothing

let number = 15;
if (number % 3 === 0 && number % 5 === 0){
    console.log('FizzBuzz');
}else if( number % 3 === 0 ){
    console.log("Fizz");
}else if (number % 5 === 0){
    console.log('Buzz');
}else{
    console.log('Nothing');
}
