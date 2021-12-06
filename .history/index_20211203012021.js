/* enlint-env node, es6 */

const express = require('express');

const PORT = 5000;

// Créé une application express
const app = express();

const accueil = require(''. / routers / register.js ')

        app.get('/', async(req, res) => {
            const registerHtml = await accueil();
            res.send('registerHtml');
        });

        app.listen(PORT, () => {
            console.log(`Serveur démarré : http://localhost:${PORT}`)
        });