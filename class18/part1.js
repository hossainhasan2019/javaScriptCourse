const form = document.querySelector('#form');
const message = document.querySelector('#message');

let isValid = false;

function validateForm(){
    isValid = form.checkValidity();
    console.log(isValid);
    if(!isValid){
        message.textContent = 'Please fill Out all fields'
        message.style.color ='red'
    }
}

form.addEventListener('submit',(e) => {
    e.preventDefault();
    validateForm();
})
