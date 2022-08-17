//Asyncronus Programming 
//usning promise nestade
//usage promise async

/*
featchingUser(123,function(user){
    console.log(user);
    sendMail(user.email, function(response){
        console.log(response.sucess);
    }); 
});
//console.log(user);
*/


featchingUser(123)
.then((user) => sendMail(user.email))
.then((response) => console.log(response));
//jodi kono error ase tahole .catch er moddhe chole jabe
.catch(err => console.log(err.message));

//mail sending callbacks 
function sendMail(userEmail){
    const promise = new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("sending mail to user....")
    
            const response = {sucess : true};
            resolve(response) ;
    
        },2000)
    });
    
    return promise;
}



//eikhane function er moddhe amra paramiter hisab a ekta user id dia dsi
//and ei function r ekta paramiter dibo call back
function featchingUser(userId){
    const promise = new Promise((resolve,reject)=> {
        setTimeout(function(){
            console.log("featching user from database")
            const featchingUser ={
                id : userId,
                name : "hossain Hasan",
                age : 23,
                email : "hossain@gmail.com",
            };
            resolve(featchingUser);
        },2000)
    });
    
    return promise
}
