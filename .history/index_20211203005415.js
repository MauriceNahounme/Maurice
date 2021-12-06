const express = require('express');

// Créé une application express
const app = express();

const accueil = require('./routers/register.js.');


app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});

module.exports = app;