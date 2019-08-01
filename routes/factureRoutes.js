const express = require('express');
const factureRouter = express.Router();

const facturedb = require('../db/facture');

factureRouter.get('/', async (req, res) => {
  try {
    let result = await facturedb.all();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

factureRouter.get('/:id_fournisseur', async (req, res) => {
  try {
    let result = await facturedb.one(req.params.id_fournisseur);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = factureRouter;
