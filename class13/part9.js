//fetch web API 
//async functon and async await 

async function getInfoFromGit(){
    try{
        const res = await fetch('https://api.github.com/users/hossainhasan2019');

        const profile = await res.json();
        console.log(profile);
    }catch(err){
        console.log(err);
    }
    
}

getInfoFromGit();

//end