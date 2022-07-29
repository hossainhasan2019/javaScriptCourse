// Problem: Print Even Odd Numbers
//
/*
for (let index = 1 ; index <= 10 ; index++){
    if ( index % 2 === 1){
        console.log(`${index} is an odd number`);
    }else{
        console.log(`${index} is an Even number`)
    }
}
*/


// example for double loop 
// print only odd numbers
/*
for(let index = 1 ; index <= 10 ; index++){
    if ( index % 2 === 1){
        console.log(`${index} is an odd number`);
    }
}
// print only even numbers
for(let index = 1 ; index <= 10 ; index++){
    if ( index % 2 === 0){
        console.log(`${index} is an Even number`);
    }
}

*/
//print only odd numbers another ways condition
for(let index = 1 ; index <= 10 ; index += 2){
    console.log(`${index} is an odd number`);
    
}

//print only even numbers another ways condition
for(let index = 2 ; index <= 10 ; index += 2){
    console.log(`${index} is an Even number`);
    
}
