/* enlint-env node, es6 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express(); // Créé une application express

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const userRoutes = require('./Routers/user');

mongoose.connect('mongodb+srv://MauriceNahounme:Monsupertest2@cluster0-pme76.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.get('/login', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: 'Connexion établie'
    });
})

const accueil = require('./Routers/register.js');

app.get('/register', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.get('/', userRoutes);


app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});