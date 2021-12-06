/* enlint-env node, es6 */

const express = require('express');
const bodyParser = require('body-parser');

const PORT = 5000;

// Créé une application express
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const mongoose = require('mongoose');

const userRoutes = require('./Routers/user');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<Maurice>:<Monsupertest2>@cluster0.jnbch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

app.get('/login', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Connexion établie'
    });
})

const accueil = require('./routers/register');

app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.get('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});