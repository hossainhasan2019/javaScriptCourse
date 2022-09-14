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
    //part333333333333333333333333


    //get reposotoris
    async function getRepos(profile){
        const res = await fetch(`${profile.repos_url}${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&per_page=10`)
        const repo = await res.json();

        return repo;
    }




    document.querySelector('#search').addEventListener('submit' , async (e) => {
        e.preventDefault();
        const username = document.querySelector('#findByUsername').value;
        console.log(username);

        if(username.length > 0 ){
            document.querySelector('.loader').style.display ='block'
            document.querySelector('.user-details').style.display = 'none'
            document.querySelector('.notFound').style.display = 'none'
            const profile = await getUser(username);
            document.querySelector('.loader').style.display ='none'
    
            if(profile.message === 'Not Found'){
                document.querySelector('.notFound').style.display = 'block';

            }else{
                const repos = await getRepos(profile);
                document.querySelector('.user-details').style.display = 'flex';
                showProfile(profile);
                showRepos(repos)
                
            }


        document.querySelector('#findByUsername').value = ''   ; ;
        }

    })

function showRepos(repos){
    let newHtml ='';
    for(let repo of repos){
        newHtml += `
        
        <div class="repo">
        <div class="repo_name">
            <a href="${repo.html_url}">${repo.name}</a>
        </div>
        <p>
            <span class="circle"></span>${repo.language}
            <ion-icon name="star-outline"></ion-icon> ${repo.watchers}
            <ion-icon name="git-branch-outline"></ion-icon> ${repo.forks_count} 
        </p>
        </div>
        
        
        `

    }

    document.querySelector('.repos').innerHTML = newHtml;
}


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

