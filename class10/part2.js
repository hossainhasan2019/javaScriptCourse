//array & object Destructuring 


function greeting({name ,age,address:{log,lat},}){
    //const {name ,age,address:{log,lat},} = user;
    console.log(`hello ${name} (${age}) from ${log},${lat}`)
}


const user = {
    name : 'Hossain hasan',
    age : 27,
    address : {
        log : 34.34,
        lat : 34.34,
    },
};


//array destructuring
let numbers = [1,2,3,4];

//destructuring
let [a,b,c,d] = [1,2,3,4];

console.log(a,b,c,d);

//end