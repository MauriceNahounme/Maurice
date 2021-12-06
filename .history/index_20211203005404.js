const express = require('express');

// Créé une application express
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !')
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

module.exports = app;