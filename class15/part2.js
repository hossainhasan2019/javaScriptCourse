// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

//part1
showMonsters();
//create a function and insert monster data
function showMonsters(){
    //create monster div 
    const monster = document.createElement('div');
    monster.className = 'monster';
    const img = document.createElement('img');
    img.src = 'https://robohash.org/6?set=set2';
    img.alt = 'Hossain Hasan';
    //p tage create kora anad classname and inner text dia dia holo
    const name = document.createElement('p');
    name.className = 'name';
    name.innerText = 'Hossain Hasan';
    //p tage create kora anad classname and inner text dia dia holo
    const email = document.createElement('p');
    email.className = 'email';
    email.innerText = 'hossain@gmail.com';

    // monster div er moddhe append kore dia holo
    monster.append(img,name,email);
    //monsters div er moddhe monster gula k append kore dia holo
    document.querySelector('.monsters').append(monster);

    console.log(monster);

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
