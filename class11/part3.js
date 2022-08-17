//error handaling 
//error handaling korar jonno amader usage korte hobe 
//try , catch , finally
function div( a, b ){
    if(b === 0){
        //eikhane je error likhbo sei error show korbe
        throw new CustomeAnyNameError("secend parameter can't be zero");
    }
    return a / b ;
}


//try er moddhe kono error ase kina 
try{
    console.log(div(4,0));
}
//catch er moddhe thakbe amra eri error ta nia kikaj korbo
catch(e){
    console.log(e);
    //error er information gula nia asa jabe 
    console.log(e.name);
    console.log(e.message);
}
//amader error dhora poruk r na poruk finally block er kaj hobe ei 
finally{
    console.log("finally works finally")
}

console.log('Hello coder ')

//end

