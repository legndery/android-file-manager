const deviceRoutes = require('./device-router');
const explorerRoutes = require('./explorer-router');

/**
 * @param {express} app
 */
module.exports = function routes(app) {
  app.use('/devices/explorer', explorerRoutes);
  app.use('/devices', deviceRoutes);
};
