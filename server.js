const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//temp
const pool = require('./db');

//Import des routes de l'API.
const welcomeRouter = require('./routes');
const supplierRouter = require('./routes/supplierRoutes');
const invoiceRouter = require('./routes/invoiceRoutes');

//Définition du port de l'application. Par défaut : port 3000.
const port = process.env.PORT || 3000;

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Route de bienvenue : utilise la routes définies dans l'index de ./routes, avec le point de départ api/v1/
app.use('/api/v1/', welcomeRouter);
//Routes d'accès aux suppliers :
app.use('/api/v1/suppliers', supplierRouter);
//Routes d'accès aux invoices :
app.use('/api/v1/invoices', invoiceRouter);

app.post('/api/v1/suppliers', function(req, res) {
  const supplier = {
    company: req.body.company,
    adress: req.body.adress,
    postcode: req.body.postcode,
    city: req.body.city,
    country: req.body.country,
    phone: req.body.phone,
    swift_bic: req.body.swift_bic,
    iban: req.body.iban,
    account: req.body.account,
    category: req.body.category,
  };
  const params = [
    supplier.company,
    supplier.adress,
    supplier.postcode,
    supplier.city,
    supplier.country,
    supplier.phone,
    supplier.swift_bic,
    supplier.iban,
    supplier.account,
    supplier.category,
  ];
  const query =
    'INSERT INTO supplier (company, adress, postcode, city, country, phone, swift_bic, iban, account, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  pool.query(query, params, (err, result) => {
    if (err) return err;
    res.json({
      message: 'Utilisateur ajouté !',
      supplier: supplier,
      id: this.lastID,
    });
  });
});

//Démarrage sur serveur :
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
