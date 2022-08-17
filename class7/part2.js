// Object Manipulation 

const user = {
    name : 'hossain hsan',
    age : 25,
    isMarried : true,

};

// add 

user.email = 'hossainhasan2019@gmail.com';
user['phone'] = '01555555555';



// Update

user.isMarried = false;
user.age = user.age + 2;
user.age += 3;


// delete
delete user.age;



//dot notation er beni fits
//valind variable er khete dot notation
// invalid variable er khetre squre brakets

//exmple
//invalid variable update
user['ph- 4one'] = '01999999999';

//daynamicaly proparty name usage

let telephone = 'amar telephone number'
user[telephone] = '017000000';


console.log(user);

//end
