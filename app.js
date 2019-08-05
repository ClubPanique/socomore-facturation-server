//Import d'express et d'autres dépendances nécessaires au fonctionnement de l'application.
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//Configuration de CORS pour accepter les requêtes provenant du client
/* const corsOptions = {
  //Définir l'adresse du client ici :
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
}; */

//Utilisation du middleware cors pour pouvoir faire des requêtes à partir du client.
app.use(cors());
//Utilisation du middleware bodyParser pour pouvoir traiter les requêtes.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Import des routes de l'API.
const welcomeRouter = require('./routes');
const supplierRouter = require('./routes/supplierRoutes');
const invoiceRouter = require('./routes/invoiceRoutes');

//Route de bienvenue : utilise la routes définies dans l'index de ./routes, avec le point de départ api/v1/
app.use('/api/v1/', welcomeRouter);
//Routes d'accès aux suppliers :
app.use('/api/v1/suppliers', supplierRouter);
//Routes d'accès aux invoices :
app.use('/api/v1/invoices', invoiceRouter);

module.exports = app;
