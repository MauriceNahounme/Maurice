/* enlint-env node, es6 */

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;

// Créé une application express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./Routers/user.js');

const mongoose = require('mongoose');


app.get('/', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Connexion établie'
    });
})

const accueil = require('./Routers/register.js');

app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.get('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
}); console.log(`Serveur démarré : http://localhost:${PORT}`)
});