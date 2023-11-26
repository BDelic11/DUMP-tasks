
(async() => {
    try {
        
        let getPosts = await fetch('https://dummyapi.io/data/v1/user', {
            headers : {
                'app-id' : '654a8d79e6d95de4900d9232'
            }
        })

        let jsonPosts = await getPosts.json();
        let firstUser = jsonPosts.data[0];

        document.body.innerHTML += 
        `
        <div class="user">
        <div class="firstName">${firstUser.firstName}</div>
        </div>
        `

   
    } catch (error) {
        console.log(error)
    }

    try {

        let pushPost = await fetch('https://dummyapi.io/data/v1/user/create',{
            method : 'POST',
            headers : { 'app-id' : '654a8d79e6d95de4900d9232',
                        'Content-Type' : 'application/json'
                    },
            body : JSON.stringify({
                firstName : 'Bruno',
                lastName : 'Delic',
                email : 'ivan23212ivan@ivan.com'
            })
        })

       let jsonPush = await pushPost.json();
       console.log(jsonPush.id)

        if (jsonPush.id) {
            let user = await fetch(`https://dummyapi.io/data/v1/user/${jsonPush.id}`, {
                headers : { 'app-id' : '654a8d79e6d95de4900d9232',
                        'Content-Type' : 'application/json'
                    }
            })

            let jsonUser = await user.json();
            console.log(jsonUser)

        }
        
    } catch (error) {
        console.log(error)
    }

} )();