//async await usage kora
//async await er error handaling kora

/*

featchingUser(123)
.then((user) => sendMail(user.email))
.then((response) => console.log(response));
//jodi kono error ase tahole .catch er moddhe chole jabe
.catch(err => console.log(err.message));
*/

//async function aslike normal function 
async function dbInfo(){
    //error handel korar jonno amra likhbo try catch block
    try {
        const user = await featchingUser(123);
        const response = await sendMail(user.email);
        console.log(response);
        
    }catch(err){//catch block er moddhe error ta dhora porbe
        
        //error er message print kora
        console.log(err.message);
    }

   
}

//function call kora 
dbInfo();


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
            //resolve(featchingUser);
            //error print kora
            reject(new Error("error!!"));
        },2000)
    });
    
    return promise
}

//end