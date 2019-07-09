
const device_routes = require('./device_router');


///Only for JSDOC///////
const express = require('express')();
/////////////////////////

/**
 * @param {express} app
 */
module.exports = function(app){
    app.use('/device', device_routes);
}