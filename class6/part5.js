let message = "Please repeat the 'repeat' word"

//slice method dia limit kore valu ana ba print kora
//substr secend paramiter hisabe index nay

console.log(message.slice(0,6)); //[0-5]

//same jinis first and seced paramitar usage
console.log(message.slice(3,9)); 

//1 paramitar usage 

console.log(message.slice(3)); 
console.log(message.slice()); 

//ei khane nagative index o dia jabe
//mainus dia suru korle ses theke star hoy
console.log(message.slice(-5 , -1)); 


//substring() method usage
//mainus parmiter nay na
//starting valu dia dite hobe
console.log(message.substring(0,6))

// substr() method 
//substr secend paramiter hisabe length nay
console.log(message.substr(0, 13));
