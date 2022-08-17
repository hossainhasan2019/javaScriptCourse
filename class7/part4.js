

const user = {
    name : 'hossain hsan',
    age : 25,
    isMarried : true,
    gender : 'male',
    phone : '01599999999'

};

// ways 1 kye and valu travers

for(let key in user){
    console.log(key, user[key]);
}

// secend waye ei ta ekta array akar a valu return kore
console.log(Object.keys(user));
console.log(Object.values(user));

// object er  key travers
for (let val of Object.keys(user)){
    console.log( val);
}

// object er valu  travers
for (let val of Object.values(user)){
    console.log( val);
}
//end

