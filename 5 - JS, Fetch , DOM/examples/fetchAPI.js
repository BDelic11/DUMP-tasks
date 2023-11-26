// DummyAPI , fetchAPI
// prvi parametar je url.. fetch nam vraca promise(then i catch)

fetch('https://dummyapi.io/data/v1/user').then(response => console.log('then', response)).catch(error => console.log('catch', error));

// ide u 'then' i ako 'ok:false' u catch ide samo ako nemoze pristupit adresi gore svejedno imamo error 403 al ide u then
// zato moramo sami to ogranicit i throwamo not ok -> response 200 ok - 400 not ok
// response.ok

fetch('https://dummyapi.io/data/v1/user').then(response => {

    if (!response.ok) {
        throw 'not ok status';
    }
    
    console.log('then', response);  

}).catch(error => console.log('catch', error));


// GET METHOD
// drugi argument mozemo stavit objekt u ovom slucaju appID 
// response.json() nam pomaze da procitamo podatke od tamo i promijeni u podatke koji nama tribaju
// nakon toga radimo jos jedan then di iskoristimo taj 'json' 
fetch('https://dummyapi.io/data/v1/user', {
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a'
    }
} ).then(response => response.json())
.then(json => console.log(json));

// POST METHOD
//post request (method, header , body)
// dodajemo Content-Type !!! NESMIMO ZABORAVIT
fetch('https://dummyapi.io/data/v1/user/create', {
    method: 'POST',
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a',
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        firstName: 'test',
        lastName: 'testis',
        email: 'lika@asdad.com'
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
            .then(user => console.log(user)) ;
    }
})
.catch(error => console.log(error));