const express = require('express');

const router = express.Router();
const { DeviceExplorerController } = require('../controller');

// router.get('/', DeviceController.index);

router.get('/ls*', DeviceExplorerController.ls);

module.exports = router;
