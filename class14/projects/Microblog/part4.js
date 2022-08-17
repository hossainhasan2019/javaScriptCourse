//ekti nidristo class silect kivabe korte pari

//getElementById eikhane sudu id suppor kore
// let header = document.getElementById('add-post-title-id')
// console.log(header.id);
// console.log(header.className);
// console.log(header.classList);

// //kisu style kora 

// header.style.backgroundColor = '#333';
// header.style.color = '#fff';
// header.style.padding = '15px';
// //importent ***
// //header.style.display = 'none'

// header.textContent = 'hossain';
// header.innerText = 'hossain2';
// header.innerHTML = '<span style = "color:red"> Hossain 3</span>';

//** */
//using queryselector 
//queryselector dia sob kisu dhora jay
//class name id tag
//querySelector() dia amra ekta element dhorte pari prothom ta

let header = document.querySelector('#add-post-title-id')

console.log(header.id);
console.log(header.className);
console.log(header.classList);

header.style.backgroundColor = '#333';
header.style.color = '#fff';
header.style.padding = '15px';
//importent ***
//header.style.display = 'none'

header.textContent = 'hossain';
header.innerText = 'hossain2';
header.innerHTML = '<span style = "color:red"> Hossain 3</span>';

