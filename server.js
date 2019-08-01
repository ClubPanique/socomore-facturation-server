const express = require('express');
const app = express();

//Import des routes de l'API.
const welcomeRouter = require('./routes');
const supplierRouter = require('./routes/supplierRoutes');
const invoiceRouter = require('./routes/invoiceRoutes');

//Définition du port de l'application. Par défaut : port 3000.
const port = process.env.PORT || 3000;

//Convertit le body des requêtes en json.
app.use(express.json());

//Route de bienvenue : utilise la routes définies dans l'index de ./routes, avec le point de départ api/v1/
app.use('/api/v1/', welcomeRouter);
//Routes d'accès aux suppliers :
app.use('/api/v1/suppliers', supplierRouter);
//Routes d'accès aux invoices :
app.use('/api/v1/invoices', invoiceRouter);

//Démarrage sur serveur :
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
