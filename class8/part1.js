// Function Declaration 
/*

function aboutMe (){
    const message = `I am hossain hasan and i am 22 years old.`;
    console.log(message);
}

//function call 
aboutMe();

*/

function aboutMe (name , age){
    const message = `I am ${name} hasan and i am ${age} years old.`;
    console.log(message);
}

//function call 
aboutMe("hossain hasan" , 22);
aboutMe("hahaha s" , 27);

//calculation function dia kora

let sum1 = 33;
let sum2 = 34;
//let sum = sum1 + sum2
//console.log(sum)

function calSum(sum1,sum2){
    let sum = sum1 + sum2 ;
    return sum;
} 

console.log(calSum(23 ,34))

let result = calSum(23,34);
console.log(result);

//end




