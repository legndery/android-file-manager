const express = require('express');
const connectionManager = require('../modules/connection-manager/ConnectionManger');
const FileManager = require('../modules/file-manager');

const router = express.Router();
let fManager = null;
router.get('/', (req, res) => {
  res.json(connectionManager.attachedDevicesList());
});
router.get('/ls', async (req, res) => {
  const data = await fManager.ls();
  res.json(data);
});
router.get('/:id', (req, res) => {
  try {
    console.log(req.params);
    const connection = connectionManager.connect(req.params.id);
    fManager = new FileManager(connection);
    res.json({ msg: 'Success' });
  } catch (err) {
    console.dir(err);
  }
});
module.exports = router;
