//asyncronous function
//CallBacks

//eikhane featch a amra user id argument hisab a user id and function dia dissi 
featchingUser(123,function(user){
    console.log(user);
});
//console.log(user);


//eikhane function er moddhe amra paramiter hisab a ekta user id dia dsi
//and ei function r ekta paramiter dibo call back
function featchingUser(userId,CallBacks){
    setTimeout(function(){
        console.log("featching user from database")
        const featchingUser ={
            id : userId,
            name : "hossain Hasan",
            age : 23,
            email : "hossain@gmail.com",
        };
        CallBacks(featchingUser)
    },2000)
    
  
}

//end
