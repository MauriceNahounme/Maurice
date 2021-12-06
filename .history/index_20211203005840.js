const express = require('express');

const PORT = 4000;

// Créé une application express
const app = express();

const accueil = require();


app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

module.exports = app;