// Problem: check a year is leap year or not 
//1. Pic a year
//2. if the year is divisible by 400, then it is a leap year
//3. if the year is divisible by 4 and not divisible by 100 , it is a leap year
//4. otherwise, the year is not a leap year

let year = 2000;

if(year % 400 ===0 ){
    console.log('this year is a leap year');
}else if (year % 4 === 0 && year % 100 !== 0){
    console.log('this year is a leap year');
}else{
    console.log("not a leap year")
}
