
//Pobieranie wartości z pól typu radio

const interests = document.querySelector('input[name="interests"]:checked')?.value || "Nie podano";



//Pobieranie wartości z checkboxów

const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
.map(checkbox => checkbox.value)
.join(", ") || "Brak zainteresowań";



clearErrors();


//Co to paterny?

let isValid = true;

if(name.length < 2){
    displayError('name', 'Imię musi mieć co najmniej 2 znaki');
    isValid = false;
}

if(message.length < 5){
    displayError('message', 'Wiadomość musi mieć co najmniej 5 naków');
    isValid = false;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[\s@]+$/;
if(!emailPattern.test(email)){
    displayError('email', 'Podaj poprawny adres e-mail');
    isValid = false;
}


// Wyświetlanie danych w podsumowaniu
if(isValid){
 const resultDiv = document.getElementById('result');
 resultDiv.innerHTML = `
 <h3>Podsumowanie:</h3>
 <p><strong>E-mail:</strong> ${name}</p>
 <p><strong>Płeć</strong>${gender}<p>
 <p><strong></strong>${}<p>
 <p><strong></strong>${}<p>
 <p><strong></strong>${}<p>
 
 `
 
}



function displayError(fieldID,message){
    const field = document.getElementById(fieldID);
    const errorDiv = document.createElement('div');
    errorDiv.className='error-message';
    errorDiv.textContent=message;
    errorDiv.style.color = 'red';
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearErrors(){
    const errors = document.getElementsByClassName('error-message');
    while(errors.length > 0){
        errors[0].parentNode.removeChild(errors[0]);
    }
}