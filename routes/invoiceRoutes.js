const express = require('express');
const invoiceRouter = express.Router();

const invoice = require('../controllers/invoiceController');

invoiceRouter.get('/', async (req, res) => {
  try {
    let result = await invoice.findAllInvoices();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.get('/:id', async (req, res) => {
  try {
    let result = await invoice.findOneInvoice(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = invoiceRouter;
