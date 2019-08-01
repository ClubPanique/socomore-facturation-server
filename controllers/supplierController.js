const pool = require('../db');
const express = require('express');

//Requêtes sur la table supplier.
/* let Supplier = supplier => {
  this.company = supplier.company;
  this.adress = supplier.adress;
  this.postcode = supplier.postcode;
  this.city = supplier.city;
  this.country = supplier.country;
  this.phone = supplier.phone;
  this.swift_bic = supplier.swift_bic;
  this.iban = supplier.iban;
  this.account = supplier.account;
  this.category = supplier.category;
};*/

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
    pool.query(query, params, (err, res, fields) => {
      if (err) return reject(err);
      console.log(fields);
      resolve(res);
    });
  });
};

module.exports = Supplier;

/* [
        newSupplier.company,
        newSupplier.adress,
        newSupplier.postcode,
        newSupplier.city,
        newSupplier.country,
        newSupplier.phone,
        newSupplier.swift_bic,
        newSupplier.iban,
        newSupplier.account,
        newSupplier.category,
      ] */
