const express = require('express');
const supplierRouter = express.Router();

const Supplier = require('../controllers/supplierController');

supplierRouter.get('/', async (req, res) => {
  try {
    let result = await Supplier.findAllSuppliers();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.get('/:id', async (req, res) => {
  try {
    let result = await Supplier.findOneSupplier(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.post('/', async (req, res) => {
  try {
    const supplier = req.body;
    let result = await Supplier.newSupplier(supplier);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.put('/:id', async (req, res) => {
  try {
    const supplier = req.body;
    let result = await Supplier.updateSupplier(supplier, req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

supplierRouter.delete('/:id', async (req, res) => {
  try {
    let result = await Supplier.deleteSupplier(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = supplierRouter;
