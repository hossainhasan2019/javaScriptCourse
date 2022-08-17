//fatch Web API
//Usage github
//api.github.com/user/hossainhasan2019;

//usage javascript buildin function 
//fatch
const gitAPI = fetch('https://api.github.com/users/hossainhasan2019');;

//amra promise return a paisi tai amra eikhane .then and catch method apply korsi


gitAPI
    .then((res) => res.json())
    .then((profile) => console.log(profile))
    .catch((err) => console.log(err));


console.log(gitAPI);




//end


