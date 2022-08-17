//excercise - 
//area of circle
//area = PI * r * r [Here r = radius of Circle]
// PI = 3.1416

//function Declaration 

function areaOfCircle(radius){
    return 3.1416 * radius * radius ;
}
console.log(areaOfCircle(2));

//Function Expression 
//Math.PI usage kora o ja pai er man likhe dia o ta
const radiusFun = function (radius){
    return Math.PI * radius * radius ;
}
console.log(radiusFun(2));

//Arrow Function [ most Recommended Way]
const radiusFun2 = radius => Math.PI * radius * radius ;

console.log(radiusFun2(2));

//end