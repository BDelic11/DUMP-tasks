// Ista stvar kao promise samo se pise na drugaciji nacin
// ne koristimo then nego pisemo 'try - await'
// cisci error handling sa 'try' 'catch'
// ako ocemo try catch nesmimo zaboravit ovaj 'async'! (async() => {})();


(async () => {

    try {
        let response = await fetch('https://dummyapi.io/data/v1/user');
        console.log('then', response);
    } catch(error) {
        console.log('catch alternative', error);
    }

    try {
        let response = await fetch('https://dummyapi.io/data/v1/user');
        if (!response.ok) {
            throw 'status not ok';
        }
        console.log('then alt', response);

    } catch(error) {
        console.log('catch alternative', error);
    }

    /*
    try {
        
        let response = await fetch('https://dummyapi.io/data/v1/user',{
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a'
            }
        }).then(response => response.json());

        console.log(response);

    } catch (error) {
        console.log('user fetch not succesfull');
    }

    */

    //KAKO NAPISAT OVAJ GORE NA TRY CATCH NACIN:

    try {
        
        let response = await fetch('https://dummyapi.io/data/v1/user',{
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a'
            }
        });
        
        let responseJson = await response.json();

        console.log(responseJson);

    } catch (error) {
        console.log('user fetch not succesfull');
    }

//  Post request

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
                email: 'iv12aoc@iva.com'
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

})();


