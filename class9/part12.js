//Es6 Feature : Map methdo and callback function 

let numbers = [1,2,3];

let multiply2 =[]; //empty array 

// for loop chalabo 
for(let num of numbers){
    multiply2.push(num * 2);
}

console.log(multiply2);

//es6 fitures map methhod 
//and arrow function

console.log(numbers.map((num) => num * 2 ));

//map usage array object

let doctor =[
    {name : 'hossain hasan', age : 22},
    {name : ' hasan hossain', age : 30},
    {name : 'Johan Smith', age : 26},
];

//only name print /travers

const dorctorName = doctor.map((doc) => doc.name);

console.log(dorctorName);

//end
