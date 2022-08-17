//promise

// promise 2ta argument nay resolve and reject
//
const promise = new Promise(function (resolve , reject){
setTimeout(() => {
    //resolve(1);
    reject(new Error("Error! user not found"));
},2000);

});

//print result 
console.log(promise);

//resolve valu print then keyword er maddhom a
promise.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err.message)
});

//print error 
// end
