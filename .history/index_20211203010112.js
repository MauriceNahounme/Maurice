/* enlint-env 
const express = require('express');

const PORT = 4000;

// Créé une application express
const app = express();

app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

module.exports = app;