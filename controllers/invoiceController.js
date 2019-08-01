const pool = require('../db');

//Requêtes sur la table invoice.
let invoice = {};

//Query sur la table invoice pour récupérer toutes les facture.
invoice.findAllInvoices = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table invoice pour récupérer une facture avec un paramètre id.
invoice.findOneInvoice = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM invoice WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

module.exports = invoice;
