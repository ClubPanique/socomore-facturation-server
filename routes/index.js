const express = require('express');
const db = require('../db');
const fournisseurdb = db.fournisseurdb;
const facturedb = db.facturedb;
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let result = await fournisseurdb.all();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let result = await fournisseurdb.one(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/factures', async (req, res, next) => {
  try {
    let result = await facturedb.all();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/factures/:id_fournisseur', async (req, res, next) => {
  try {
    let result = await facturedb.all(req.params.id_fournisseur);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
