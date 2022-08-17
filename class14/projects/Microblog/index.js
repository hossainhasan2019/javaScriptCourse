// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯
//start

console.log(document);

//html all collection paite amra usage korbo all method
console.log(document.all);

//travarse html tag
console.log(document.all[1]);
//travarse html tag
console.log(document.all[7]);
//html tag length
console.log(document.all.length);
//domain print
console.log(document.domain);
//url print
console.log(document.URL);
//html doctype print
console.log(document.doctype);
//html head 
console.log(document.head);
//html body
console.log(document.body);
//html charset 
console.log(document.charset);
//content type
console.log(document.contentType);

//html className 
console.log(document.body.className);
//html class list joto gula class ase sob gula nia asa

//html er  forms
console.log(document.forms);


console.log(document.forms[0]);
//form er id nia asa
console.log(document.forms[0].id);
//form class name dekha
console.log(document.forms[0].className);
//action dekha
console.log(document.forms[0].action);
//action a ki method a ase tai dekhamethod dekha
console.log(document.forms[0].method);

//html documents a thaka links gula nia asa
console.log(document.links);

//html er scripts nia asa
console.log(document.scripts);
//html er attributs nia asa
console.log(document.scripts[3].getAttribute('src'));


//sob gula scripts traversing usage loop
//html collection a array method apply hoyna tai amra array te convert kore nibo
let scripts = Array.from(document.scripts);
console.log(scripts);
//appy forEach method 
scripts.forEach((scripts) => console.log(scripts));
scripts.forEach((scripts) => console.log(scripts.getAttribute('src')));

//part2
//extra

