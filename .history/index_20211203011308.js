/* enlint-env node, es6 */

const express = require('express');

const PORT = 5000;

// Créé une application express
const app = express();

app.get('/', async(req, res) => {

    res.send(registerHtml);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});