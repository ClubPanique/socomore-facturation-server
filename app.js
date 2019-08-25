//Import d'express et d'autres dépendances nécessaires au fonctionnement de l'application.
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

//Configuration de CORS pour accepter les requêtes provenant du client
/* var whitelist = [
  'https://socomore-facturation-application.cleverapps.io/',
  'http://socomore-facturation-application.cleverapps.io/',
  'https://app-04e47380-3c5e-44c0-bbd1-b6ec7c6abe1f.cleverapps.io/',
  'http://app-04e47380-3c5e-44c0-bbd1-b6ec7c6abe1f.cleverapps.io/',
];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}; */

const corsOptions = {
  //Définir l'adresse du client ici :
  origin: '*',
  optionsSuccessStatus: 200,
};

//Utilisation du middleware cors pour pouvoir faire des requêtes à partir du client.
app.use(cors(corsOptions));
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
