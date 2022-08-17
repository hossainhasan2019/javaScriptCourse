//Shorting & Reversing an array

let numbers = [4,10,6,17,8,9];

//assending ordder arry k  boro theke soto sajano
//short function string onu jaie compare kore and asci valu onu jai
// numbers.sort();
numbers.sort((n1 , n2 ) => {n1 - n2});
console.log(numbers);

//javascript a amra string k o biog korte pari jodi 2ta string number thake
// but jog kora jay na jog korle 2ta add hoye jay
console.log("400" - "300");


//reverse function dia ulta dikk theke reverse hoye jabe
numbers.reverse();

console.log(numbers);

//array of object

let doctors = [
    {name : "hossain hasan", age : 22},
    {name : "hasan hossain", age : 30 },
];

doctors.sort();

//compare function 
//and swaping 
//age boro theke soto or soto theke boro swaping
doctors.sort(function(d1,d2){
    //condition 
    
    if(d1.age > d2.age) return +1;// +1 return korle boro valu opor a chole jabe
    //0 return korle jemon silo temon ei khatkbe 
    if(d1.age === d2.age) return 0;
    // jodi soto hoy tahole -1 return korle niche chole asbe
    if(d1.age < d2.age) return -1;
})
console.log(doctors);

//desending opration
//reverse order a print korte chaile 
doctors.sort(function(d1,d2){
    //condition 
    
    if(d1.age > d2.age) return +1;// +1 return korle boro valu opor a chole jabe
    //0 return korle jemon silo temon ei khatkbe 
    if(d1.age === d2.age) return 0;
    // jodi soto hoy tahole -1 return korle niche chole asbe
    if(d1.age < d2.age) return -1;

}).reverse();
console.log(doctors);

//short a kivabe likhte pari 
doctors.sort(function(d1,d2){
    //condition 
    
     return d1.age - d2.age;// ekhane posative or nagative valu return korbe jar karone 
     //assending or dessending akar a sojjito hobe
   
})
console.log(doctors);

//arrow function dia kivabe aro short a kora jay
doctors.sort((d1,d2) => d1.age - d2.age);
console.log(doctors);