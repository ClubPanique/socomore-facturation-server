const pool = require('../db');

//Requêtes sur la table supplier.
let supplier = {};

supplier.findAllSuppliers = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM supplier', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

supplier.findOneSupplier = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM supplier WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res[0]);
    });
  });
};

supplier.editOneSupplier = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM supplier WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res[0]);
    });
  });
};

module.exports = supplier;
