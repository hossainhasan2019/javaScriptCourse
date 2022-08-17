//excercise
// print all proparty or valu and valu jog fol

const salaries = {
    hossain : 10000,
    hasan : 20000,
    harry : 59999,
    sumit : 600000,
    jhankar : 7999999,
};

let sum = 0;
/*
for ( let key in salaries){
    console.log(key, salaries[key]);
    sum += salaries[key]
}

console.log(sum);
*/


//secend ways 
console.log(Object.values(salaries));
for(let val of Object.values(salaries)){
    sum += val
}

console.log(sum);

//end