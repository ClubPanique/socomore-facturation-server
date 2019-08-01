const pool = require('../db');

//Requêtes sur la table invoice.
let Invoice = {};

//Query sur la table invoice pour récupérer toutes les facture.
Invoice.findAllInvoices = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table invoice pour récupérer une facture avec un paramètre id.
Invoice.findOneInvoice = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table invoice pour créer une facture.
Invoice.newInvoice = invoice => {
  return new Promise((resolve, reject) => {
    const params = [
      invoice.invoice_num,
      invoice.date,
      invoice.command_num,
      invoice.price_notax,
      invoice.tax,
      invoice.status,
      invoice.supplier_id,
    ];
    const query =
      'INSERT INTO invoice (invoice_num, date, command_num, price_notax, tax, status, supplier_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
    pool.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

//Query sur la table invoice pour mettre à jour une facture avec un paramètre id.
Invoice.updateInvoice = (invoice, id) => {
  return new Promise((resolve, reject) => {
    const params = [
      invoice.invoice_num,
      invoice.date,
      invoice.command_num,
      invoice.price_notax,
      invoice.tax,
      invoice.status,
      invoice.supplier_id,
      id,
    ];
    const query =
      'UPDATE invoice SET invoice_num = ?, date = ?, command_num = ?, price_notax = ?, tax = ?, status = ?, supplier_id = ? WHERE id = ?';
    pool.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = Invoice;
