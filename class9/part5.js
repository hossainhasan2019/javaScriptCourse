//finding Object in array

const doctors = [
    {name: "hossain hasan", age : 22 , },
    {name: " hasan hossain", age : 25, },
    {name: "Have fun", age :30 , },
];

//
const result = doctors.find(function(doctor){
    return doctor.name === "hossain hasan"
})

console.log(result);

//jader age 18 er besi tader info dorkar 

const result2 = doctors.find(function(doctor){
    return doctor.age > 18 ;
})

// index o jante chai tahole 
// findIndex() method usage korbo 


const result3 = doctors.findIndex(function(doctor){
    return doctor.name === "hossain hasan"
})


console.log(result3);
//and arrow function
//arrow function 
console.log(doctors.findIndex((doctor) => doctor.name === "hossain hasan"));