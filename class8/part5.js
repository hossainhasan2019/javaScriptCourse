//Rest Paramiters
// 3 dot ekta array return kore 
//amra jodi unlimited number gun kori tahole amader 
//eivabe rest parameters usage korte hobe

function multiply(...args){ //3 doat dia ja dicaler korbo tai array hoye jabe
                            // then array opration chalano jabe
    console.log(args);
    let = mul = 1; //initial kora
    //for loop dia array er proti ta valu gun kora
    for( let num of args){
        mul *= num;
    }
    return mul; //return kora
}

//ekhon unlimited argument dia jabe 
console.log(multiply(7,5,8,98,2));

//end