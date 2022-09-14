//start part 1
//

const CLIENT_ID = 'b410e82bf7d06d00ca09';
const CLIENT_SECRET ='16ce1b068715510085b9917ef2550fd398524609';  


//data anar jonno simple fetch method
// fetch(`https://api.github.com/users/hossain2019`)
//     .then((res) => res.json())
//     .then((profile) => console.log(profile));

//create a async function 
    async function getUser(name){
        //usage a query string 
        const res = await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)

        const profile = await res.json();
        return profile;
    }

    document.querySelector('#search').addEventListener('submit' , async (e) => {
        e.preventDefault();
        const username = document.querySelector('#findByUsername').value;
        console.log(username);

        const profile = await getUser(username);
        console.log(profile);
    })


