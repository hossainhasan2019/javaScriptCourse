// Irerate an Array

const numbers = [1,2,3,4,5,6,7];

//for loop dia array travers

for( let index = 0; index < numbers.length; index++){
    console.log(index, numbers[index]);
}

//for of loop dia array travers

for(let num of numbers){
    console.log(num);
}

//array ForEach function

numbers.forEach(function(num, index){
    console.log(num, index);
});

//array ForEach function (arrow)

numbers.forEach((num, index) => {
    console.log(num, index);
});

//array ForEach function (arrow) short
numbers.forEach((num, index) => console.log(num, index));