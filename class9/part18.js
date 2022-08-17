//Problem Books
// (1) Take all the books with price less than 500 and 
// rating greater then 4
//(2) sort them by their rating in descending order
//(3) Pic ther name 

const books = [
    {name: 'book1', price: 450, rating: 3.1},
    {name: 'book2', price: 470, rating: 4.1},
    {name: 'book3', price: 350, rating: 4.1},
    {name: 'book4', price: 600, rating: 4.1},
    {name: 'book5', price: 700, rating: 4.1},
];
/*
//solve first problem
const filterBooks = books.filter((book) => {
    return book.price < 500 && book.rating > 4;//condition

});

console.log(filterBooks);

//2nd problem solve

const sortedBooks = filterBooks.sort((b1,b2) => {
    if(b1.rating < b2.rating )return +1;
})

console.log(sortedBooks);


//pic only name

const onlyNames = sortedBooks.map((b1) => {
    return b1.name
});

console.log(onlyNames);



//short kora


const filterBooks2 = books.filter((book) =>book.price < 500 && book.rating > 4);//condition

console.log(filterBooks2);

//2nd problem solve
//usage tarnary oprator
const sortedBooks2 = filterBooks2.sort((b1,b2) => b1.rating < b2.rating ? +1 : -1 )//usage tarnary oprator 

//or another ways
const sortedBooks2 = filterBooks2.sort((b1,b2) => b1.rating < b2.rating ? +1 : -1 )
console.log(sortedBooks2);


//pic only name

const onlyNames2 = sortedBooks2.map((b1) => {
    return b1.name
});

*/

//method usage kore code soto kore fela
const onlyBooks = books
    .filter((book) => book.price < 500 && book.rating > 4)
    .sort((b1,b2) => b1.rating < b2.rating - b1.rating )
    .map((b1) => b1.name);

    console.log(onlyBooks);

    //end