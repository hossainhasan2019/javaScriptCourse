//ES6 feature : Filtering an array 

let numbers = [1,2,3,4];

// array filtaring old aways
let onlyOddNumbers = [];
for ( let num of numbers){
    if (num % 2 === 1){
        onlyOddNumbers.push(num)
    }
}

console.log(onlyOddNumbers);

//arrow function
//array filtaring new ways es6 fitures
const onlyOddNumbers2 = numbers.filter((num) => num %  2 === 1);


console.log(onlyOddNumbers2)

//end