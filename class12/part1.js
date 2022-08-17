//factory function
//javascript objectOriented programming
//re usageable code

function user(name, age ){
    const userObject ={ 
        name,
        age ,
        walk : function(){
        console.log("john started walking");
        },
    }
    return userObject;
}


const user2 = user('hossain hasan',22);
const user3 = user('hasan hossain',26);

console.log(user2,user3)

//end