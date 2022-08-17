//Array Method : Reduce 

let numbers = [10, 30 ,30];

let sum = 0;

for (let num of numbers){
    sum += num;
}

console.log(sum);
// reduce method 
//callback function er ses a 0 dia inisialize kora hoye se
const reducedSum = numbers.reduce((sum, num) => sum + num ,0);
console.log(reducedSum);