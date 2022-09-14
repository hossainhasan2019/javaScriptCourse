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
        showProfile(profile);//part2
        console.log(profile);
    })

    //part2222

    function showProfile(profile){
        document.querySelector('.profile').innerHTML = `
        <img
            src="${profile.avatar_url}"
            alt="${profile.name}"
        />
          <p class="name">${profile.name}</p>
          <p class="username login">${profile.login}</p>
          <p class="bio"> 
            ${profile.bio}
          </p>

          <div class="followers-stars">
            <p>
              <ion-icon name="people-outline"></ion-icon>
              <span class="followers"> ${profile.followers} </span> followers
            </p>
            <span class="dot">·</span>
            <p><span class="following"> ${profile.following} </span> following</p>
          </div>

          <p class="company">
            <ion-icon name="business-outline"></ion-icon>
           ${profile.company}
          </p>
          <p class="location">
            <ion-icon name="location-outline"></ion-icon>${profile.location}
          </p>
        
        
        `




    }

