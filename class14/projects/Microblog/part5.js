//select element
//child ,parent ,sevling 

const tbody = document.querySelector('tbody');
console.log(tbody);

//children propary er maddhom a child gula nite pari


//***
console.log(tbody.children);
//console.log(tbody.childNodes);

//children count
console.log(tbody.childElementCount);

console.log(tbody.children[2]);
//manupulate 
tbody.children[2].innerHTML = '<span>Hello </span>';


console.log(tbody.firstChild);
console.log(tbody.firstElementChild);
console.log(tbody.lastChild);
console.log(tbody.lastElementChild);

//child er child ber kora
console.log(tbody.firstElementChild.children[1].children[0]);
//parent element
console.log(tbody.parentElement);
//parent element er parent element
console.log(tbody.parentElement.parentElement);
console.log(tbody.parentNode);

//sevling ber kora and previous and next sevling

console.log(tbody.children[1].previousElementSibling);
console.log(tbody.children[1].nextElementSibling);

//end

