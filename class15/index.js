// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
//default keyword usage na kora carly brackets dite hoyse se
import {monsters} from './monsters.js';

for(let monster of monsters){
    showMonsters(monster);
}


//create a function and insert monster data
function showMonsters(monster){

    //create monster div 
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';

    //img child
    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    img.alt = monster.name;


    //p tage create kora anad classname and inner text dia dia holo
    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = monster.name;


    //p tage create kora anad classname and inner text dia dia holo
    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = monster.email;


    // monster div er moddhe append kore dia holo
    monsterDiv.append(img,name,email);


    //monsters div er moddhe monster gula k append kore dia holo
    document.querySelector('.monsters').append(monsterDiv);


}

notFound();
function notFound(){
    const notFoundDiv = document.createElement('div');
    notFoundDiv.className = 'p-5 not-found';
    notFoundDiv.style.display = 'none' ;

    const span = document.createElement('span');
    span.innerText = '404';
    const h1 = document.createElement('h1');
    h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';
    notFoundDiv.append(span,h1);
    document.querySelector('.monsters').append(notFoundDiv);


}

//i

document
.querySelector('#search-monster')
.addEventListener('keyup' , function(e){
    const keyword = e.target.value.toLowerCase();


    //shob gula monster gula nia asa
    const monsters = document.querySelectorAll('.monster');
    
    let notFound = true;
    

    //shob gula monster er opo loop chalana jate shob gula traverse kora jay
    for( let monster of monsters){
        console.log(monster.children);
        //monster er name ta nia asa and lower case a convert kora 
        const name = monster.children[1].innerText.toLowerCase();
        //email er text gula nia asa and lower case a convert kora
        const email = monster.children[2].innerText.toLowerCase();

        //email and name er moddhe keyword ta se kina checking
        if(name.includes(keyword) || email.includes(keyword)){
            monster.style.display = 'block';
            notFound = false;
        }else{
            monster.style.display = 'none';
        }
    }
    if(notFound){
        document.querySelector('.not-found').style.display = 'block';
           //statements
        }else{
            document.querySelector('.not-found').style.display = 'none';
        }

    
}) ;

document.querySelector('#search-monster-form').addEventListener('submit',e => {
    e.preventDefault();
});

//part 5 notfound creating

