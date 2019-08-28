const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const welcome =
    "Bienvenue sur l'API de facturation de Socomore /o/ <br> Pour accéder aux fournisseurs, utilisez le chemin : /suppliers <br> Pour accéder aux factures, utilisez le chemin : /invoices <br> :)";
  res.send(welcome);
});

module.exports = router;
