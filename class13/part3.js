//call back hell
//callback er moddhe callback eivabe code likhte thakle code ta unread able hoye jay

featchingUser(123,function(user){
    console.log(user);
    sendMail(user.email, function(response){
        console.log(response.sucess);
    }); 
});
//console.log(user);


//mail sending callbacks 
function sendMail(userEmail, callBacks){
    setTimeout(function(){
        console.log("sending mail to user....")

        const response = {sucess : true};
        callBacks(response) ;

    },2000)

    
}



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

//end done
