const pool = require('../db');

//Requêtes sur la table fournisseur.
let fournisseurdb = {};

fournisseurdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM fournisseur', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

fournisseurdb.one = id => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM fournisseur WHERE id = ?', [id], (err, res) => {
      if (err) return reject(err);
      return resolve(res[0]);
    });
  });
};

module.exports = fournisseurdb;
