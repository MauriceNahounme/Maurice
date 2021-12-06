const express = require('express')

// Créé une application express
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World !')
})

// Démarrer le serveur et écouter un port donné
const PORT = 6300

app.listen(PORT, () => {
    // Fonction éxecutée lorsque l'application a démarré
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})