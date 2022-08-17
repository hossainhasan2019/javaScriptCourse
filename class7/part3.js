//Object Method & this keyword
//ekta object er moddhe jekono data type  rakha jay funtion o rakha jay
//this keyword usage 

const user = {
    name : 'hossain hsan',
    age : 25,
    isMarried : true,
    fariend : ['vatija',''],
    selectedColor : null ,
    calculateAge : function() {
        //ei khane this keyword na dile error show
        // kore this keyword dia ei object er sob proparty dhore
        console.log( ` I am ${this.age} years old!`);
    }

};

user.calculateAge();

//end
