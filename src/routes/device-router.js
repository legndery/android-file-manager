const express = require('express');

const router = express.Router();
const { DeviceController } = require('../controller');

router.get('/', DeviceController.index);

router.get('/connect/:id', DeviceController.connect);

module.exports = router;
