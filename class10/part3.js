//Data structure

//ES6 Data Structure : Set 
//array er vitor a set rakhte parbo tobe sobgula unique valu hoite hobe

let set = new Set();

set.add(100);
set.add(200);
set.add(300);
set.add(100);

console.log(set);
//koto gula set ase eita dekhar jonno set.size usage korbo
console.log(set.size);

//set delete korar jonno 

set.delete(200);

console.log(set);
console.log(set.size);

//for of loop usage kore amra travarse korte pari

for(let element of set){
    console.log(element);
}

//usage for.Each() method

set.forEach((element) => console.log(element))

//set a cleat method usage korle sob gula delete hoye jabe

set.clear()

//end