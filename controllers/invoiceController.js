const pool = require('../db');

//Requêtes sur la table invoice.
let Invoice = {};

//Query sur la table invoice pour récupérer toutes les facture (avec une jointure pour récupérer le nom du fournisseur)
Invoice.findAllInvoices = () => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company FROM invoice i, supplier s WHERE i.supplier_id = s.id';
    pool.query(query, (err, res) => {
      if (err) reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table invoice pour récupérer une facture avec un paramètre id (avec jointure).
Invoice.findOneInvoice = id => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company  FROM invoice i, supplier s WHERE i.id = ?';
    pool.query(query, [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Query sur la table invoice pour récupérer les factures d'un fournisseur avec un paramètre id.
Invoice.findAllInvoicesWithSupplierId = id => {
  return new Promise((resolve, reject) => {
    const query =
      'SELECT i.*, s.company FROM invoice i, supplier s WHERE i.supplier_id = s.id AND i.supplier_id = ?';
    pool.query(query, [id], (err, res) => {
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

//Query sur la table invoice pour supprimer une facture avec un paramètre id.
Invoice.deleteInvoice = id => {
  return new Promise((resolve, reject) => {
    pool.query('DELETE FROM invoice WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = Invoice;
