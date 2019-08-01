const pool = require('./index');

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
facturedb.one = id_fournisseur => {
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

module.exports = facturedb;
