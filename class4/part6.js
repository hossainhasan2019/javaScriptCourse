// Problem: our grading system 

// Take a mark 
// if the mark is in between 80 - 100, Print "A+"
// if the mark is in between 70 - 79, print "A"
// if the mark is in between 60 - 69, print "A-"
// if the mark is in between 50 - 59, print "B"
// if the mark is in between 40 - 49, print "C"
// if the mark is in between 33 - 39, print "D"
// if the mark is in between 0 - 32, print "F"
// Also Point Out the invalid marks

let mark = 33;

if(mark <0 || mark >100){
    console.log("Invalid Mark");
}else if (mark >= 80 && mark <= 100){
    console.log("A+");
}else if(mark >= 70 && mark <= 79){
    console.log("A");
}else if(mark >= 60 && mark <= 69){
    console.log("A-");
}else if(mark >= 50 && mark <= 59){
    console.log("B");
}else if(mark >= 40 && mark <= 49){
    console.log("C");
}else if(mark >= 33 && mark <= 39){
    console.log("D");
}else{
    console.log("F");
}
