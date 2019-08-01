const pool = require('../db');

//Requêtes sur la table invoices.
let invoice = {};

invoice.findAllInvoices = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Requêtes sur la table invoice avec un paramètre id.
invoice.findOneInvoice = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

module.exports = invoice;
