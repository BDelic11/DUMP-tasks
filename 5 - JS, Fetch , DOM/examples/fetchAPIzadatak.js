/*
fetch('https://dummyapi.io/data/v1/user',{
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a'
    }
})
.then(response => {
    if (!response.ok) {
        throw 'status not ok';
    }
})
.then(response => response.json())
.then(json => console.log(json)); */


    fetch('https://dummyapi.io/data/v1/user', {
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a',
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log('error: ' + error));


fetch('https://dummyapi.io/data/v1/user/create', {
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a',
        'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
        firstName : 'Ivan',
        lastName: 'Ivanic',
        email: 'iviaoc@iva.com'
    })
})
.then(response => response.json())
.then(json => {
    if (json.id) {
        fetch(`https://dummyapi.io/data/v1/user/${json.id}`,{
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a',
                'Content-Type': 'application/json'
            }
        })
        .then(user => user.json())
        .then(user => console.log(user))
    }
    
})
.catch(error => console.log('error: ' + error));


const UserID = '60d0fe4f5311236168a109f5'

// fetch posts

const getPosts = fetch(`https://dummyapi.io/data/v1/user/${UserID}/post`, {
        headers: {
            'app-id': '6414b71a3bb7f879fa89ec3a',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => console.log('error: ' + error));

// fetch comments

const getComments = fetch(`https://dummyapi.io/data/v1/user/${UserID}/comment`, {
        headers: {
            'app-id': '6414b71a3bb7f879fa89ec3a',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .catch(error => console.log('error: ' + error));

// Promise.all()

Promise.all([getPosts, getComments])
.then(([getPosts, getComments]) => {

    console.log(getPosts, getComments);
    console.log(getComments.data[0]);
    console.log(getComments.data.length);

    getComments.data[0].post = '60d21b1967d0d8992e610c01';

    for(let i = 0; i < getPosts.data.length; i++){
            console.log('Post: ' + getPosts.data[i].text + '\nKomentari:\n');
            for (let j = 0; j < getComments.data.length; j++) {
           if (getPosts.data[i].id === getComments.data[j].post) {
                console.log(getComments.data[j].message + '\n');
           } 
           else console.log('No comments');    
     }
    }
    
  })
.catch(error => console.log('error: ' + error));
