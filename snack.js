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