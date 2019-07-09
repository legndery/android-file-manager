const deviceRoutes = require('./device-router');
const explorerRoutes = require('./explorer-router');
//  Only for JSDOC/////////
const express = require('express')();
//  ///////////////////////

/**
 * @param {express} app
 */
module.exports = function routes(app) {
  app.use('/devices/explorer', explorerRoutes);
  app.use('/devices', deviceRoutes);
};
