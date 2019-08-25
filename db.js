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
  host:
    process.env.MYSQL_ADDON_HOST ||
    'b53hlf0zjrgkbo7m2fik-mysql.services.clever-cloud.com',
  port: process.env.MYSQL_ADDON_DB || '3306',
  user: process.env.MYSQL_ADDON_USER || 'uyvzyidwyq1erced',
  password: process.env.MYSQL_ADDON_PASSWORD || 'FOaPjHnrsotgfzpCOal6',
  database: process.env.MYSQL_ADDON_DB || 'b53hlf0zjrgkbo7m2fik',
});

module.exports = pool;
