//Break & continue

//loop break condition 
for(let index = 0 ; index <= 20; index++){
    if(index === 10){
        break;
    }
    console.log(index);

}

//continue kye word dia skip kora hoy

for(let index = 1 ; index <= 20; index++){
    if(index % 2 === 1){
        continue;
    }
    console.log(index);

}
