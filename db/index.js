const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'socomore-facturation',
});

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
    pool.query(
      'SELECT * FROM fournisseur WHERE id = ?',
      [id],
      (err, result) => {
        if (err) return reject(err);
        return resolve(result[0]);
      }
    );
  });
};

module.exports = fournisseurdb;
