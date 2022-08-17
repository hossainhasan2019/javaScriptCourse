//Weak Set , weak Map

// WeakSet er moddhe sudhu object type data support korbe

const ws = new WeakSet();

//declare empty object

const object1 = {};
const object2 = {};

ws.add(object1);
ws.add(object2);

console.log(ws);
console.log(ws.has(object1));
console.log(ws.has(object2));

//delete
ws.delete(object2);

console.log(ws);

//weak map 
//weak map a sudu object type date rakha jabe

const wm = new WeakMap();

wm.set(object1, 123);

console.log(wm);

//object 1 ase kina 
console.log(wm.has(object1));

//get method dia object er valu kivabe pabo

console.log(wm.get(object1));

//delete method dia weak object delet kora

wm.delete(object1);
console.log(wm);

//weakmap dia clear kora jabe na
//eita sudu refarance bohon koore kono valu bohon korena