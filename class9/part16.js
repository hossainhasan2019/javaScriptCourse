//Problem : Odd sum 

const odds = [10, 11, 12 , 13];

let sum = 0

//loop usage kore sum variable er moddhe jog fal rakhlam
//jodi bijor hoy tahole jog kora hobe
for(let num of odds){
    if(num % 2 === 1){
        sum = sum + num;
    }
}
console.log(sum);
//array method er maddhome kivabe kora jay

// sudhu odd number nibo array method er maddhom a
//first appy filter() method 

/*

const onlyOdd = odds.filter((num) => {
    return num % 2 === 1;
});

console.log(onlyOdd);//amra bejor sonkha nia nilam 
//ekhon apply reduce method for jog 

//sum k inisitialize kora hoyese and call back function e paramiter dia dia holo 
const oddSum = onlyOdd.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(oddSum);

*/

//array method dia filtaring and reduce para chan kore code kora
//short kore likhar ways and
// chain akare likha 
const onlyOdd = odds
    .filter((num) => num % 2 === 1)
    .reduce((sum, num) => sum + num, 0);

console.log(onlyOdd);

//end