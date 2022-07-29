// for ... in loop 
//for in loop travers to object and array

//for in loop syntex 
for (key in object) {
    // code block to be executed
}
//for in loop syntex
for (index in array) {
    // code block to be executed
}
    
  

//for in loop usage object
const myObject = {
    name : 'hossain hasan ',
    age : 26,

};

for(let key in myObject){
    console.log(key,myObject[key])
}

// for in loop usage array

const myArray = ['hossain', 'hasan', '45',454];

for(let index in myArray){
    console.log(index,myArray[index])
}

