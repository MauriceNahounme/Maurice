const express = require('express');

// Créé une application express
const app = express();

const PORT = 4000;

const accueil = require('./routers/register.js.');


app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

module.exports = app;