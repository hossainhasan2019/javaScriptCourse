

//UI related stufs
document
//form select and start event listener
    .querySelector('#ewallet-form')
    .addEventListener('submit', function(e){
        e.preventDefault();

        console.log('Submit  !!!');
        //selector valu insert 
        const type = document.querySelector('.add__type').value;
        const description = document.querySelector('.add__description').value;
        const value = document.querySelector('.add__value').value;
        //console a dekhar jonno console log kora hoyese
        //console.log(type,description,value);
        

        //empty submit jeno add na hoy tar jonno condation 
        //if(description.length > 0 && value.length > 0 ) 
        if(description && value ){
            addItems(type, description,value);
        //form reset 
            resetForm();
        } ;
        //length 0 er besi linkh aje kotha r na linkha ekei kotha
        

});

//functon er moddhe rakha holo 
//Item add korar sokol code block
    function addItems(type, description,value){
        //time functin ta local veriable a diclare kora
        const time = getFormattedTime();
        //usage tarnary oprator and some value changes
        const newItemHtml = `
        <div class="item">
        <div class="item-description-time">
            <div class="item-description">
                <p>${description}</p>
            </div>
            <div class="item-time">
                <p>${time}</p>
            </div>
        </div>
        <div class="item-amount ${type === '+' ? ' income-amount': 'expense-amount' } "> 
            <p>${type} $ ${value}</p>
        </div>
        </div>
        
        `
        console.log(newItemHtml);
        //html er collection ta dhora holo 
        const collection = document.querySelector('.collection');

        //afterbegain dia text insert er location .eita koi jabe ei ta bujhay 
        //developer mozila te details senario dia ase
        //amader banano html ta collecton er moddhe insert kore dia hoise
        collection.insertAdjacentHTML('afterbegin',newItemHtml);

    }


//reset functon 
function resetForm(){
        //empty string dara amra form reset kore dite pari
        document.querySelector('.add__type').value = '+';
        document.querySelector('.add__description').value = '';
        document.querySelector('.add__value').value = '';
}


//utility function 
//time manupulate

function getFormattedTime(){
    const now = new Date().toLocaleTimeString('en-us',{
        month : 'short',
        day : 'numeric',
        hour : '2-digit',
        minutue : '2-digit',
    });
    
    //date splite kora and am pm kora
    const date = now.split(',')[0].split(' ');
    const time = now.split(',')[1];
    //time array k nijeder moto kore sajano
    
    //sora sori retun kore dissi const er kono proyojon nai 
    return formattedTime = `${date[1]} ${date[0]},${time}`;
    
    //return formattedTime;
}