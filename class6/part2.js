// string methods

let message = "Please repeat the 'repeat' Word";
console.log(message.charAt(1));

// print unicode valu or asci code valo usage charCodeAt() method
//https://www.asciitable.com/ ei link a asci code er valo pawa jabe
console.log(message.charCodeAt(1));

//toUpperCase() method dia string valu uppercase kora hoy
console.log(message.toUpperCase());

//toLowerCase() method dia string valu lowercase kora hoy
console.log(message.toLowerCase());

//kono niddristo string ba sub string ase kina find korte includes() method usage 
// includes() method boolian data return kore eita ekta 
console.log(message.includes('repeat'));

//includes() method a amra index theke suru korte pari 
console.log(message.includes('repeat',14));

//startWith() method dia ami dekte pari kono niddristo kyeword dia suru hoye se ki na
console.log(message.startsWith('Please'));

//startWith() method dia ami dekte pari kono niddristo kyeword dia suru hoye se ki na ta index dia start kora
console.log(message.startsWith('repeat',7));

//endWith() ei method dia dekte pari niddristo kyeword dia message ta ses hoyse kina
console.log(message.endsWith("Word"));


console.log();
