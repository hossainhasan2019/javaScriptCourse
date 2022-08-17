// Object cloning 

const user = {
    name : "hossain hasan",
    age : 25
};

//deacler empty object
const copiedUser = {};

//cloning ways1 not usageable

copiedUser.name = user.name;
copiedUser.age = user.age;
console.log(copiedUser);

// coloning for loop 

for ( key in user){
    console.log(key , user[key]);
    copiedUser[key] = user[key];
    console.log(copiedUser);
}

//boject copied object assign method

const copiedUser2 = Object.assign({},user);

console.log(copiedUser2);

//speed oprator dia kivabe object copy kora jay

const copiedUser3 = {...user};

console.log(copiedUser3)

//end