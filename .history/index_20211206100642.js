/* enlint-env node, es6 */

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 5000;

const app = express(); // application express créée

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



//Enregistrement des routes
const accueil = require('./Routers/register.js');

app.use('/register', async(req, res) => {
    const registerHtml = await accueil();
    res.send(registerHtml);
});

app.use('/login', userRoutes);


app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}`)
});