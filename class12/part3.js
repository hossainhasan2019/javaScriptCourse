//create Object using factory & constructor functions 

//create a object
/*
const homeAddress1 = {
    street : 'A',
    city : 'B',
    zip : 'C',
}

const homeAddress = homeAddress1("A","B","C");
const homeAddress = homeAddress2("A","B","C");

*/
//constructor function 

/*
function homeAddress(street,city,zip){
    return{
        street,
        city,
        zip,
    };
}
    
console.log(homeAddress1);
console.log(homeAddress2);

*/
//constructor function 



const HomeAddress3 = new HomeAddress("A","b","c");

//constructor function
//constructor function dia pascale note dia likhbo
function HomeAddress(street, city,zipcode){
    this.street
    this.city
    this.zipcode
}


console.log(HomeAddress3);
