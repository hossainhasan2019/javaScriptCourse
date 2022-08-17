//html class name

//let headers = document.getElementsByClassName('header');

//jodi query selector usage kora hoy eita ekta node list
//eita node list howay aita sora sori forEach support kore
//amader r array te convert kora lage na
let headers = document.querySelectorAll('h1');
//let headers = document.getElementsByTagName('h1');

//queryselector hoy array te r convert korar proyojon hosse na
//headers = Array.from(headers);

headers.forEach((head,index) => {
    console.log(head.className);
    head.style.color = "#fff";
    head.style.backgroundColor = "#333";
//some style 
    head.style.padding = "15px";
//edit html inner text
    head.innerText = `Hossain ${index}`;
});


//end
