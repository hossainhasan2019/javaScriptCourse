//Observing the event object

const clearBtn = document.querySelector('.clear-post');


clearBtn.addEventListener('click',(event) => {
    console.log(event); 
//full body er coursor click point er position value
    console.log(event.clientX);
    console.log(event.clientY);
   //full button er coursor click point er position value
    console.log(event.offsetX);
    console.log(event.offsetY);
//amra kono button press kore  click korsi kina
    console.log(event.altKey);
    console.log(event.shiftKey);
    console.log(event.ctrlKey);
//amra html elemet er sokol tottho pabo
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.innerText);
//style change
    event.target.style.backgroundColor = "black";
});

//end