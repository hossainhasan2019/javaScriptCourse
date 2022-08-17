//json = javaScript object notation

//json data object er moto ei 

//undefind valu rakha jabe na 
//function usage kora jabe na
// proparti and valu invited comar moddhe rakhte hobe


const user = {
    name : 'hossain hasan',
    age : 22,

};

//object convert to json data method
const jsonDate = JSON.stringify(user);

console.log(jsonDate);

//json to object convert method
console.log(JSON.parse(jsonDate));