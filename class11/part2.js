// custom errow throw 

// amra ei function dara je vag korsi eita jeno zero na hoye jay 
//tai amra ekta custom error throw korbo 
/*
function div( a, b ){
    return a / b ;
}

console.log(div(4,2));
*/
// star throw custom error

function div( a, b ){
    if(b === 0){
        throw "secend parameter can't be zero";
    }
    return a / b ;
}

console.log(div(4,0));
//amra eivare error throw korbo na 



//best pracktis Object error throw kora 

function div( a, b ){
    if(b === 0){
        //eikhane je error likhbo sei error show korbe
        throw new CustomeAnyNameError("secend parameter can't be zero");
    }
    return a / b ;
}
console.log(div(4,2));

//end