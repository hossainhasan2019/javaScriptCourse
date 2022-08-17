//padStart, padEnd

let minute = '4';
let hour = '7';


//pad start method dia number er prothom a number add kora hoy

//fitst paramiter a koto gula number add hobe ei ta diclaration korte hobe 
//and 2nd paramiter a ki sonkha add hobe tai diclare korte hobe


console.log(minute.padStart(5,'0'));

//jodi amra kono paramiter na dei tahole space dara separate hoye jabe
console.log(minute.padStart(5));

//padEnd() metho dia number er ses a number add korte pari 
console.log(minute.padEnd(5,'0'));


//TrimStart,TrimEnd


let name = '   hossain hasan   ';
console.log(name);
console.log(name.length);

//trim() method dia string er space remove kora hoy
/*
//trimStart dia string er first space kete dei
name = name.trimStart();
console.log(name.length);

//trimEnd dia string er first space kete dei
name = name.trimEnd();
console.log(name.length);
*/

name = name.trimStart().trimEnd();
console.log(name.length);


//end



