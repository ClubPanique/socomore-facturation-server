const mysql = require('mysql');

//Configuration pour connexion en local
/* const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'socomore-facturation',
}); */

//Configuration pour déploiement sur Clever Cloud
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'b53hlf0zjrgkbo7m2fik-mysql.services.clever-cloud.com',
  port: '3306',
  user: 'uyvzyidwyq1erced',
  password: 'FOaPjHnrsotgfzpCOal6',
  database: 'b53hlf0zjrgkbo7m2fik',
});

module.exports = pool;
