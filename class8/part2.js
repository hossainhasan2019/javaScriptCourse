// default Parameters 
// default parameters er valo always ses theke suru korte hobe nahole
// undefined nan erro show korbe
function addThreeNumbers(num1, num2 = 5, num3 = 5){
    const sum = num1 + num2 + num3;
    return sum;
}

console.log(addThreeNumbers(2,7));

//eivabe ses a valu default paramiter nadile error show korbe
function errorParamiter(num1 , num2 = 5,num3){
    const sum = num1 + num2 + num3;
    return sum;
}
console.log(errorParamiter());
//end