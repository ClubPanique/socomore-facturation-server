const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'socomore-facturation',
});

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

//Requêtes sur la table factures.
let facturedb = {};

facturedb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query('SELECT * FROM facture', (err, res) => {
      if (err) return reject(err);
      return resolve(res);
    });
  });
};

//Requêtes sur la table facture avec un paramètre id_fournisseur.
facturedb.all = id_fournisseur => {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM facture WHERE id_fournisseur = ?',
      [id_fournisseur],
      (err, res) => {
        if (err) return reject(err);
        return resolve(res);
      }
    );
  });
};

module.exports = {fournisseurdb, facturedb};
