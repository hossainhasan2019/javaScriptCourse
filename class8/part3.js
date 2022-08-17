//hoisting , functions as an expression 


//hoisting 
//eita hosse Hoisting 
//function hoistig hole jekono jaygay eita print kora jay 
//main function jekono jaygay call kora jay
console.log(calSum(5 ,5))
function calSum(sum1,sum2){
    let sum = sum1 + sum2 ;
    return sum;
} 

//functions expression
// epression function er niche call korte hoy 
// jekono jaygay call kora jay na
const val = 10;
const calSumexp = function(num1 , num2){
    const sum = num1 + num2;
    return sum;
};

console.log(calSumexp(5,10));
//end