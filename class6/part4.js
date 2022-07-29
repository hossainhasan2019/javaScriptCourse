

//toString() method dia number, boolian , array k string bano hoy
let temp = [1,2,3];
let temp2 = 123;
let temp3 = false;
//toString() method dia string kora hoy
console.log(temp.toString());
console.log(temp2.toString());
console.log(temp3.toString());
console.log(typeof temp.toString());

//concate method 

let m1 = "hi";
let m2 = 'hello';
let m3 = 'bye';

let m = m1.concat(m2,m3);
//best pracktis for concat
//let m = m1 + m2 + m3;
console.log(m);

let message = "Please repeat the 'repeat' word"
//split method dia string k array kore fali
// space dia separet kora
console.log(message.split(' '));
//separet kora 
console.log(message.split("'"));
//jodi kono separator deya nahoy tahole proti ta charecter string hoye jabe
console.log(message.split(""));

//ei linit kore die paramitar dia jabe
console.log(message.split("", 5));

