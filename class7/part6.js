//Object Destructuring

const user = {
    name : 'hossain',
    age : 35 ,
    favBook : {
        name : "green people",
        author : "salary toonry",
    },
};
//normal ways
console.log(user.name);
console.log(user.age);
console.log(user.favBook.name);
console.log(user.favBook.author);

// object destructuring

const {name, age , favBook } = user;
console.log(name);
console.log(age);
console.log(favBook.name);
console.log(favBook.author);

//same name a 2ta variable nia jabe na tai name variable er ta change kore 
//title kora hoise
// object er same name thake seita destructing
// Object destructing er vitor re name kora

const {name:title , author } = favBook;

console.log(name);
console.log(age);
console.log(title);
console.log(author);