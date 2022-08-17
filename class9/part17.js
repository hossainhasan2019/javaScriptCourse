// Problem : Even Max

const evens = [101, 118,122,131];

//inisialize kora ekta soto number]
let maxValu = -1;

//shob theke boro number berkora and print kora
for( let num of evens){
    if(num % 2 === 0){
        if(maxValu < num){
            maxValu = num;
        }
    }
}

console.log(maxValu);

//array method er maddhome ber kora

const onlyEvens = evens.filter((num) => {
    return(num % 2 === 0)
});

console.log(onlyEvens);

//math.max() method di akora hosse
console.log(Math.max(...onlyEvens));

//usage reduce() method 
// reduce() method a 2ta para miter dite hoy
const maxValu2 = onlyEvens.reduce((maxValu, num) => {
    if(maxValu < num) return num;
    return maxValu;
}, -1);


