//Asyncronus Programming 

console.log("Before");

//asyncronus none blocking code user

function featchingUser(){
    setTimeout(function(){
        console.log("featching user from database")
        return{
            name : "hossain Hasan",
            age : 23,
        }
    },2000)
    
    //return a kono valu diel undefind  chole jay
    //return 1
}

const user = featchingUser();
console.log(user);

/*
//usage setTimeout() function 
//asyncronus non blocking code 
setTimeout(function(){
    console.log("featching user from database")
},2000);

*/
console.log("After");

//end