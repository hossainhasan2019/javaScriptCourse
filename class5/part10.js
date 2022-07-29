// Prime Number banglay bole moulik songkha
// Prime number is only divisible by 1 and itself.
//11 is only divisible by 1,11
// check : 2,3,.....,number -1

//find prime nubers
/*
let number = 11;

let isPrime =true;
for (let i = 2; i <= number -1 ; i++){
    if ( number % i === 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log(`This is a prime Number`);

}else{
    console.log(`This is not a prime number`);

}

*/
// check prime number in range 

let number = 11;

for(let number = 10 ; number <= 20; number++){
    let isPrime =true; //create a plug
    for (let i = 2; i <= number -1 ; i++){
            if ( number % i === 0){
                isPrime = false;
                break;
            }
    }

    if(isPrime){
        console.log(number);
    }
}


