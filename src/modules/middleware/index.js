const bodyParser = require('body-parser');
const cors = require('cors');

//  Only for JSDOC/////////
const express = require('express')();
//  ///////////////////////
/**
 * @param {express} app
 */
function middleWare(app) {
  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

module.exports = middleWare;
