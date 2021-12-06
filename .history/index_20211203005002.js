const express = require('express')

// Créé une application express
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World !')
})

const PORT = 6300

app.listen(PORT, () => {
    // Fonction éxecutée lorsque l'application a démarré
    console.log(`Serveur démarré : http://localhost:${PORT}`)
})