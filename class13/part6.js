// multiple async function control kora
//multiple promise handel kora 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),2000);
});



const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve(2),5000);
});
/*
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error("Error!!!")),5000);
});
*/


//array akar a promise gula dia dissi 
//promise .all method sobgula promise er kaj ses hole print dibe


//Promise.all([promise1,promise2]).then(res => console.log(res)).catch(err => console.log(err));


// race method je kono result paile ei print korbe
Promise.race([promise1,promise2]).then(res => console.log(res)).catch(err => console.log(err));

//end