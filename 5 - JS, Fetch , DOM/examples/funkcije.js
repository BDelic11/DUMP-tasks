function CreateCard(user, div) {

    if (!user.picture) {
        user.picture =  prompt('Unesite url slike: ');
    }

    if (!user.title) {
        user.title = prompt('Unesite mr/ms: ');
    }

    div.innerHTML += 
    `
    <div class="card">

    <span class="title">${user.title}</span>
    <span class="first-name">${user.firstName}</span>
    <span class="last-name">${user.lastName}</span>   
    <img class="image" src = "${user.picture}"></img>

    </div>
    `
};

function fetchUsers() {
    fetch('https://dummyapi.io/data/v1/user', {
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a'
    }
} ).then(response => response.json())
.then(json => console.log(json));

}

function CreateUser(NewFirstName, NewLastName, NewMail, cardsDiv) {
    
    console.log(NewFirstName, NewLastName, NewMail, cardsDiv);


    fetch('https://dummyapi.io/data/v1/user/create', {
        method: 'POST',
        headers: {
            'app-id': '6414b71a3bb7f879fa89ec3a',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            firstName: NewFirstName,
            lastName: NewLastName,
            email: NewMail
        })

    }) 
    .then(response => response.json())
    .then(json => {
        console.log(json);
    // chaining ,  
        if (json.id) {
            fetch(`https://dummyapi.io/data/v1/user/${json.id}`,{
                headers: {
                    'app-id': '6414b71a3bb7f879fa89ec3a',
                    'Content-Type': 'application/json'
                }
            }).then(user => user.json())
                .then(user => {
                    CreateCard(user,cardsDiv);
                    fetchUsers();
                });
        }
    })
    .catch(error => console.log(error));
}



export{ CreateCard, CreateUser, fetchUsers};