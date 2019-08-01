const express = require('express');
const factureRouter = express.Router();

const facture = require('../controllers/factureController');

factureRouter.get('/', async (req, res) => {
  try {
    let result = await facture.all();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

factureRouter.get('/:id_fournisseur', async (req, res) => {
  try {
    let result = await facture.one(req.params.id_fournisseur);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = factureRouter;
