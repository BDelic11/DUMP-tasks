// <link rel="stylesheet" href="styleDOM.css">
import {CreateCard, CreateUser, fetchUsers} from "./funkcije.js";

let cardsDiv = document.querySelector('.cardContainer');



    fetch('https://dummyapi.io/data/v1/user', {
        headers: {
            'app-id': '6414b71a3bb7f879fa89ec3a'
        }
    } ).then(response => response.json())
    .then(json => {
        
        for (let i = 0; i < json.data.length; i++) {   
            
            CreateCard(json.data[i], cardsDiv);    
        }
    }
        ).catch(error => console.log(error));    
        


let clickableButton = document.querySelector('.button');

clickableButton.addEventListener('click', function(e) {
    
    //dohvati ime
    let firstName = document.getElementById('inputName');
    inputName.addEventListener('change', function(e) {
        firstName = this.value;
    })

    //dohvati prezime
    let lastName = document.getElementById('inputLast');
    inputLast.addEventListener('change', function(e) {
        lastName = this.value;
    })

    //dohvati mail
    let mail = document.getElementById('inputMail');
    inputMail.addEventListener('change', function(e) {
        mail = this.value;
    })

    CreateUser(firstName.value, lastName.value, mail.value, cardsDiv);

});



