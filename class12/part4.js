//kivabe amra cronstraction function dia string banaite pari
//constructor function always object data return kore

let name1 = "hossain ";
let name2 = new String("hasan");

console.log(name1);
console.log(name2);

//check constructor function check
console.log(typeof name1);
console.log(typeof name2);

//compare string and constructor 
console.log( name2 === name1);

//cronstructor function er maddhom a number valu print 
let age1 = 35;
let age2 = new Number(27);


console.log(age1);
console.log(age2);

//constructor function dia boolean data type
let isValid1 = true;
let isValid2 = new Boolean(true);

console.log(isValid1);
console.log(isValid2);

//referamce data type
//cronstructor function dia array type data create 

let colors = ['red','green','black'];
//array bananor jonno squre brackets er kono proyojon nai
let colors2 =new Array('red','green','black');

console.log(colors);
console.log(colors2);

//constructor function er maddhom kivabe function create korte hoy 

const num = new Function('num1', 'num2','return num1 + num2');

console.log(num(20,20));

//normal object

const obj = {
    name : 'hossain hasan',
    age: 33,
}

//constroctor function dia object create

const obj2 = new Object({
    name : 'hossain hasan',
    age: 33,
});

console.log(obj2);

//end
