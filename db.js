const mysql = require('mysql');

//Configuration de connexion, avec process.env si l'API est déployée, ou avec les infos de connexion en local en mode dev.
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  port: process.env.MYSQL_ADDON_PORT || '3306',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'socomore-facturation',
});

//Export de la variable pool pour l'utiliser dans les controllers, pour connecter à la base de données pour faire les requêtes SQL.
module.exports = pool;
