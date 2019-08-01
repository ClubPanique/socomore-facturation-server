const express = require('express');
const fournisseurRouter = express.Router();

const fournisseurdb = require('../controllers/fournisseurController');

fournisseurRouter.get('/', async (req, res) => {
  try {
    let result = await fournisseurdb.all();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

fournisseurRouter.get('/:id', async (req, res) => {
  try {
    let result = await fournisseurdb.one(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = fournisseurRouter;
