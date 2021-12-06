/ Importe le paquet express
const express = require('express')

// Créé une application express
const app = express()

// Crée une route "/" correspondant à la racine du site.
app.get('/', (req, res) => {
    // Fonction éxecutée lorsque une requête de type GET / est reçue.
    // Req = Request (EN) = Requête entrante
    // Res = Response (EN) = Réponse (FR) = Réquête sortante
    res.send('Hello World !')
})

// Démarrer le serveur et écouter un port donné
const PORT = 6300

app.listen(PORT, () => {
    // Fonction éxecutée lorsque l'application a démarré
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})