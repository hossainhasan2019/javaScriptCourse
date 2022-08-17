//Problem : Doctor Object
// 3 properties : name , designation , clinic
// 1 method : operaton 
/*
const docObject ={
    name : "hossain hasan",
    designation : "kidney spcialist",
    clinic : {
        name :'Happy care center',
        address : {
            long : 34.53,
            lat : 54.46,
        },
    
    },
    operation : function(){
        console.log("He started doing operaton")
    },
}
*/
// objectproti , valu proparty alada print kora
/*
console.log(docObject);
console.log(docObject.name);
console.log(docObject.clinic);
console.log(docObject.address.lat);
console.log(docObject.address.long);
console.log(docObject.operation);

*/

//Destructuring
/*
const {name, designation, clinic } = docObject;

console.log();
console.log(name);
console.log(clinic);
console.log(clinic.address.lat);
console.log(clinic.address.long);
*/

//Destructuring and ekei object a same name er valu thakle seita rename kore dite hoy
/*
const {name, designation, clinic } = docObject;
const {name : clinicName, address  } = clinic;



console.log();
console.log(clinicName);
console.log(address.lat);
console.log(address.long);

*/
/*

const {name, designation, clinic } = docObject;
const {name : clinicName, address  } = clinic;
const { long,  lat } = address;

console.log(lat);
console.log(long);
*/
//for in daynamic name valu proparty

const docObject ={
    name : "hossain hasan",
    designation : "kidney spcialist",
    clinic : {
        name :'Happy care center',
        address : {
            long : 34.53,
            lat : 54.46,
        },
    
    },
    operation : function(){
        console.log(`${this.name} started doing operaton`)
        console.log(`${this.clinicName} started doing operaton`)
    },
}

// single line  a Destructuring 
const {name,designation,clinic : { name : clinicName, address :{long,  lat } } } = docObject;

/*
const {name, designation, clinic } = docObject;
const {name : clinicName, address  } = clinic;
const { long,  lat } = address;
console.log(name);
console.log(clinicName);
*/

// for in loop 

for (let prop in docObject){
    //console.log(prop) // print key
    console.log(prop , docObject[prop]) //key and print value
}

//end