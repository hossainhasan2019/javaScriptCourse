//ES6 Data Structure: Map

//map diclaration 
let map = new Map();

// map er moddhe key and valu akar a data thake

map.set('Mango', 'amm');
map.set('banana', 'kola');
map.set('Score', 100);

console.log(map);

//usage for of loop 
for(let element of map ){
    console.log(map);
}

//map er moddhe kono element ase kina seita dekte has usage korbo

console.log(map.has("orange"));

//map delet korte
map.delete("banana")

console.log(map);

//map er key and valu alada print korar jonno usage korebo
//keys and values 
console.log(map.values());
console.log(map.keys());

//map er key and valus eksathe print korar jonno amara usage korbo
// entries keyword
console.log(map.entries());

//and map clear korar jonno usage korbo 
map.clear();
console.log(map);


//end