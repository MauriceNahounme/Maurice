/* enlint-env node, es6 */

const express = require('express');

const PORT = 5000;

// Créé une application express
const app = express();

app.use(express.json());

const mongoose = require('mongoose');

const userRoutes = require('./routes/user.js');

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<Maurice>:<Jesusmaster2>@cluster0.jnbch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



const accueil = require('./routers/register.js');

app.get('/', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.get('/auth', userRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});