//Maximum of Arguments
//amar valu gula theke maximum valu print korte chai

function maxOfArguments(...argumentsss){
    console.log(argumentsss);
    let maxValue = -1 ; //inishal koralam mainas 1 dara
    //for loop er moddhe conditional state ment dia dia holo
    for(let i = 0; i < argumentsss.length; i++){
        //condition dia dilam
        if(maxValue < argumentsss[i]){
            maxValue = argumentsss[i];
        }
    }
    return maxValue
}

let result = maxOfArguments(15,5948,65,899,94,4);
console.log(result);

//same jinis arrow function usage

const maxValuArro = (...x) => {
    let maxvValuee  = -1;
    for(y = 0 ;y < x.length ; y++){
        if(maxvValuee < x[y]){
            maxvValuee = x[y];
        }
    }
    return maxvValuee

}

console.log(maxValuArro(56465456,64,46,8,64,864,6,54,65,5));
//end 