//Constructor Functions
//constructor function always object data return kore

function User(name, age){
//this keyword ekti empty object
console.log(this);
    this.name = name;
    this.age = age;
    this.wlak = function(){
        console.log('Hossain hasan started walking');
    }

}

//eikhane new keyword usage na korle ekta global object a refar kora hoito 
//global window object a refer kora hoto jodi new keyword na ditam
const user2 = new User('hasan hossain', 26);
console.log(user2);


//end


/*

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
*/