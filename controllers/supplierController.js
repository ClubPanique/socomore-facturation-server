const pool = require('../db');

const Supplier = {};

Supplier.findAllSuppliers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM supplier', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

Supplier.findOneSupplier = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM supplier WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res[0]);
    });
  });
};

Supplier.newSupplier = supplier => {
  return new Promise((resolve, reject) => {
    const params = [
      supplier.company,
      supplier.adress,
      supplier.postcode,
      supplier.city,
      supplier.country,
      supplier.phone,
      supplier.swift_bic,
      supplier.iban,
      supplier.account,
      supplier.category,
    ];
    const query =
      'INSERT INTO supplier (company, adress, postcode, city, country, phone, swift_bic, iban, account, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    pool.query(query, params, (err, res) => {
      if (err) return reject(err);
      resolve(res);
    });
  });
};

module.exports = Supplier;
