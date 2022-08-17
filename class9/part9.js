// Array Method : concat , slice

const num1 = [1,2,3];
const num2 = [4,5,6];

// concat method dia 2er odhik array k jora lagano hoy
const num = num1.concat(num2);
console.log(num);


//slice kora slice method dia koto index theke koto index print hobe tai 

const numbers = [1,2,3,4,5,6,7,8,9];

//slice kora 
const sliceArray = numbers.slice(2,6);
console.log(sliceArray);

//slice a jodi single paramiter thake tahole paramitar er valu er por theke sob gula print hobe
//r jodi slice method a  kono para miter na thake tahole full array list ta peye jabo
//clone hoye jabe 
const sliceArrayClone = numbers.slice();
console.log(sliceArrayClone);



