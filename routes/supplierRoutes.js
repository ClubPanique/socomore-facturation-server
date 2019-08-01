const express = require('express');
const supplierRouter = express.Router();

const {supplier} = require('../controllers/supplierController');

supplierRouter.get('/', async (req, res) => {
  try {
    let result = await supplier.findAllSuppliers();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.get('/:id', async (req, res) => {
  try {
    let result = await supplier.findOneSupplier(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

/* supplierRouter.post('/', createSupplier); */

module.exports = supplierRouter;
