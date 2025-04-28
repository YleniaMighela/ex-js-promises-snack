// /Ottieni il titolo di un post con una Promise.
// Crea una funzione getPostTitle(id) che accetta un id e restituisce una Promise che recupera il titolo di un post dal link https://dummyjson.com/posts/{id}


const getPostTitle = id => {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(reject)
    });
    return promessa

}

getPostTitle(1)
    .then(titolo => console.log("Titolo:", titolo))
    .catch(errore => console.error("Non è presente un titolo", errore))

getPostTitle(12)
    .then(titolo => console.log("Titolo:", titolo))
    .catch(errore => console.error("Non è presente un titolo", errore))


// 🎯 Bonus: Ottieni l'intero post con l'autore
// Crea una funzione getPost(id) che recupera l'intero post. Concatena una seconda chiamata che aggiunge una proprietà user che contiene i dati dell'autore, recuperati dalla chiamata https://dummyjson.com/users/{post.userId}.    
const getPost = id => {
    const fetchUser = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(data => {
                fetch(`https://dummyjson.com/users/${data.userId}`)
                    .then(response => response.json())
                    // .then(data => resolve(data)) in questo modo trov solo i dati dello user
                    .then(user => resolve({ ...data, user }))
                    .catch(reject)
            })
            .catch(reject)
    });
    return fetchUser

}
getPost(1)
    .then(data => console.log("Post:", data))
    .catch(errore => console.error("Non è presente un post", errore))