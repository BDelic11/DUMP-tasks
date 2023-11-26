(async() => {
 
    try {
        
        let fetchPostResponse = await fetch('https://dummyapi.io/data/v1/post', {
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a'
            }
        });

        let fetchPostResponseJson = await fetchPostResponse.json();
        console.log(fetchPostResponseJson);

    } catch (error) {
        console.log('Doslo je do pogreske', error);
    }

// create post

    try {
        
        let createPostResponse = await fetch('https://dummyapi.io/data/v1/post/create', {
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                text: 'labraddole',
                image: 'https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg',
                likes: 0,
                tags: 'labrador',
                owner: '60d0fe4f5311236168a109ca'
            })
        });

        let createPostResponseJson = await createPostResponse.json();

        if (createPostResponseJson.id) {
            let fetchPostResponse = await fetch(`https://dummyapi.io/data/v1/post/${createPostResponseJson.id}`, {
            headers: {
                'app-id': '6414b71a3bb7f879fa89ec3a',
                'Content-Type': 'application/json'
            }
        });

        let fetchPostResponseJson = await fetchPostResponse.json();
        console.log(fetchPostResponseJson);

        }

    } catch (error) {
        console.log('Doslo je do pogreske', error);
    }


})();