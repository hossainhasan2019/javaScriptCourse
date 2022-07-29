// Problem : sum of all numbers in an arry
// numbers = [10,20,30,40,50];
// result = 150

// sob gula array valu jog fol

let numbers = [10,20,30,40,50]
let sum = 0;

for(let index = 0; index < numbers.length; index++){
    //sum += numbers[index]
    sum = sum + numbers[index]
}
console.log(sum);

//how work this loop code
//0
//0 + 10 
//0 + 10 + 20
//0 + 10 + 20 + 30
//0 + 10 + 20 + 30 + 40
//0 + 10 + 20 + 30 + 40 + 50

