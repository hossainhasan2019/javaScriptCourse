// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
//default keyword usage na kora carly brackets dite hoyse se
import {monsters} from './monsters.js';

console.log(monsters)

//for loop monster traversing
for(let monster of monsters){
    showMonsters(monster);
}


//create a function and insert monster data
function showMonsters(monster){
    //create monster div 
    const monsterDiv = document.createElement('div');
    monsterDiv.className = 'monster';
    const img = document.createElement('img');
    img.src = `https://robohash.org/${monster.id}?set=set2`;
    //monster er name dia dia 
    img.alt = monster.name;
    //p tage create kora anad classname and inner text dia dia holo
    const name = document.createElement('p');
    name.className = 'name';
    //monster er name ta dia dia
    name.innerText = monster.name;
    //p tage create kora anad classname and inner text dia dia holo
    const email = document.createElement('p');
    email.className = 'email';
    //monster er email ta dia dia
    email.innerText = monster.email;

    // monster div er moddhe append kore dia holo
    monsterDiv.append(img,name,email);
    //monsters div er moddhe monster gula k append kore dia holo
    document.querySelector('.monsters').append(monsterDiv);

    console.log(monsterDiv);

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
    console.log(notFoundDiv);

}


/*

<div class="monster">
          <img src="https://robohash.org/6?set=set2" alt="Hossain Hasan" />
          <p class="name">MD. Sakib Khan</p>
          <p class="email">programmingwithsakib@gmail.com</p>
        </div>

        <div class="p-5 not-found" style="display: none">
          <span>404</span>
          <h1>🧟‍♂️ No Monster Found 🧟‍♂️</h1>
        </div>
*/
