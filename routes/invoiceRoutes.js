const express = require('express');
const invoiceRouter = express.Router();

const Invoice = require('../controllers/invoiceController');

invoiceRouter.get('/', async (req, res) => {
  try {
    let result = await Invoice.findAllInvoices();
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.get('/:id', async (req, res) => {
  try {
    let result = await Invoice.findOneInvoice(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.post('/', async (req, res) => {
  try {
    const invoice = req.body;
    let result = await Invoice.newInvoice(invoice);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.put('/:id', async (req, res) => {
  try {
    const invoice = req.body;
    let result = await Invoice.updateInvoice(invoice, req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

invoiceRouter.delete('/:id', async (req, res) => {
  try {
    let result = await Invoice.deleteInvoice(req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = invoiceRouter;
