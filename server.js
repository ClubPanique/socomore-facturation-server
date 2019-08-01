const express = require('express');
const apiRouter = require('./routes');
const fournisseurRouter = require('./routes/fournisseurRoutes');
const factureRouter = require('./routes/factureRoutes');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json()); //Convertit le body des requêtes en json.

app.use('/v1/', apiRouter); //Utilise les routes définies dans l'index de ./routes, avec le point de départ /v1/
app.use('/v1/fournisseurs', fournisseurRouter);
app.use('/v1/factures', factureRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
