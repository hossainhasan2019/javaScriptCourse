

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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++ui+++++++++++++++++++++++++++++++
//=============================================================

//part5
//total income calculation 
//and total expenses calculation  
showTotalIncome();

function showTotalIncome(){
    //sob gula item nia aslam getitemsfromls function deya 
    let items = getItemsfromLs() ;
    let totalIncome = 0 ;
    for(let item of items){
        //sudhu + item gula jog korbo tai if usage korsi
        if(item.type === '+'){
            totalIncome += parseInt(item.value);
        }
    }
    //print total income 
    console.log(totalIncome);
    //html er p tag er moddhe amra total valu ta pathay dilam 
    //backtik dia amra ekta extra doller sine dia dibo show korar jonno
    document.querySelector('.income__amount p').innerText = `$${totalIncome}` ;
}

//total expensase ta jog korbo 
showTotalExpense();

function showTotalExpense(){
    let items = getItemsfromLs();
    let totalExpense = 0;
    for(let item of items){
        if(item.type === '-'){
            totalExpense += parseInt(item.value);
        }
    }
    console.log(totalExpense);
    document.querySelector('.expense__amount p').innerText = `$${totalExpense}` ;
    
}


//show items and save localstroge 

showItems();
function showItems() {

    //items array ta nia aslam and 
    let items = getItemsfromLs();

    const collection = document.querySelector('.collection');
        //amader banano html ta collecton er moddhe insert kore dia hoise
    //html er collection ta dhora holo 

    //items k for loop chalalam 
    for(let item of items){
        const newItemHtml = `
        <div class="item">
        <div class="item-description-time">
            <div class="item-description">
                <p>${item.description}</p>
            </div>
            <div class="item-time">
                <p>${item.time}</p>
            </div>
        </div>
        <div class="item-amount ${item.type === '+' ? ' income-amount': 'expense-amount' } "> 
            <p>${item.type} $ ${item.value}</p>
        </div>
        </div>
        
        `;
        collection.insertAdjacentHTML('afterbegin',newItemHtml);
        console.log(newItemHtml);
    }
    
}


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
        
        `;
        console.log(newItemHtml);
        //html er collection ta dhora holo 
        const collection = document.querySelector('.collection');

        //afterbegain dia text insert er location .eita koi jabe ei ta bujhay 
        //developer mozila te details senario dia ase
        //amader banano html ta collecton er moddhe insert kore dia hoise
        collection.insertAdjacentHTML('afterbegin',newItemHtml);

        //local stroge a date store korbo 
        addTimesToLs(description, time ,type, value)

        //total income and valu ta show korar jonno abar o call dissi
        showTotalExpense();
        showTotalIncome();
    } 

    


//reset functon 
function resetForm(){
        //empty string dara amra form reset kore dite pari
        document.querySelector('.add__type').value = '+';
        document.querySelector('.add__description').value = '';
        document.querySelector('.add__value').value = '';
}

//local stroge a data save korar jonno ei function
function getItemsfromLs(){
    //localStorage a items name kono data ase kina 
    //eita check korbo 
    let items = localStorage.getItem('items')

    //normal data ke json a pawer jonno usage korbo json .parse
    if(items){
        //date nia asbo 
        items = JSON.parse(items);
    }else{ //jodi kono key stroge e na thake tahole eita empty array te insert korbo 
        items = [];
    }

    return items

}

function addTimesToLs(description,time,type ,value){
    let items = getItemsfromLs();
    //items er moddhe ei data gulo push korbo localstroge a 
    items.push({description,time,type,value,});
    //localstroge a ei items array ta dia dibo ekhon
    //stringify kore kore normal data k amra 
    localStorage.setItem('items',JSON.stringify(items));
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