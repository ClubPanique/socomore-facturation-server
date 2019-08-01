const express = require('express');
const fournisseurdb = require('../db');
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

module.exports = router;
