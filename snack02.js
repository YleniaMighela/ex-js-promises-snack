// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi, genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {

    return new Promise((resolve, reject) => {
        console.log("Sto lanciando il dado");

        setTimeout(() => {
            // con MathFloor calcolo il numero massimo da 1 a 6
            const generaNumero = Math.floor(Math.random() * 6) + 1;
            // ccon MathRandom restituisco un numero tra 0 e 1 
            const dadoIncastrato = Math.random() < 0.2;
            if (dadoIncastrato) {
                reject("il dado si è incastrato");
            } else {
                resolve(generaNumero)
            }

        }, 3000)

    })

};

lanciaDado()
    .then(numero => console.log("é uscito il numero:", numero))
    .catch(err => console.log(err))