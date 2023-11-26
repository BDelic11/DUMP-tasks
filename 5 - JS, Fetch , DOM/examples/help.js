(async() => {
  /*
    try {
    
        let createUserResponse = await fetch('https://dummyapi.io/data/v1/user/create', {
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                firstName : 'Ivan',
                lastName: 'Ivanic',
                email: 'iv123aoc@iva.com'
            })
        });
        
        let createUserResponseJson = await createUserResponse.json();
        
        if (createUserResponseJson.id) {
            let fetchUserResponse = await fetch(`https://dummyapi.io/data/v1/user/${createUserResponseJson.id}`,{
                    headers: {
                        'app-id': '6414b71a3bb7f879fa89ec3a',
                        'Content-Type': 'application/json'
                    }
                });
        
                
                let fetchUserResopnseJson = await fetchUserResponse.json();
                console.log(fetchUserResopnseJson);
        }
        
        } catch (error) {
            console.log('Something went wrong!', error);
        }

    try {
        
        let createUsersResponse = await fetch('https://dummyapi.io/data/v1/user/create',{

            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a',
                'Content-Type': 'application/json'
                },
            method: 'POST',
            body: JSON.stringify({
                firstName : 'ante',
                lastName: 'anteic',
                email:   'ante@gmail.com',
                picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fwonderful-shot-sea-sunset-background-beautiful-picute-contrast-image197045514&psig=AOvVaw1SOoaoDq5uVbm5jNnreNfd&ust=1679764989448000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKCbra6K9f0CFQAAAAAdAAAAABAE',
                title: 'mr'
            })
            

        });

        let createUsersResponseJson = await createUsersResponse.json();

        if (createUsersResponseJson.id) {
            let fetchUserResponse = await fetch(`https://dummyapi.io/data/v1/user/${createUsersResponseJson.id}`,{
                    headers: {
                        'app-id': '6414b71a3bb7f879fa89ec3a',
                        'Content-Type': 'application/json'
                    }
                });
        

                let fetchUserResopnseJson = await fetchUserResponse.json();
                console.log(fetchUserResopnseJson);
        }
        
        

    } catch (error) {
        console.log(error);
    }*/


try {
    
    let createUserResponse = await fetch('https://dummyapi.io/data/v1/user/create', {
        headers: {
            'app-id': '6414b71a3bb7f879fa89ec3a',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            firstName : 'Ivan',
            lastName: 'Ivansic',
            email: 'ivs41aasssoc@iva.com',
          
        })
    });
    
    let createUserResponseJson = await createUserResponse.json();
    
    if (createUserResponseJson.id) {
        let fetchUserResponse = await fetch(`https://dummyapi.io/data/v1/user/${createUserResponseJson.id}`,{
                headers: {
                    'app-id': '6414b71a3bb7f879fa89ec3a',
                    'Content-Type': 'application/json'
                }
            });
    
            
            let fetchUserResopnseJson = await fetchUserResponse.json();
            console.log(fetchUserResopnseJson);
    }
    

} catch (error) {
    console.log(error);
}

})();


function CreateName(first, last) {
    console.log(`${first} ${last}`);
}
  
    let clickableButton = document.querySelector('.button');

clickableButton.addEventListener('click', function(e) {
    
    console.log(e);
    let firstName = document.getElementById('inputName');
    inputName.addEventListener('change', function(e) {
        firstName = this.value;
        console.log(firstName.value);
        console.log(firstName);
    })

    let lastName = document.getElementById('inputLast');
    inputName.addEventListener('change', function(e) {
        lastName = this;
    })

    CreateName(firstName.value, lastName.value);

});
