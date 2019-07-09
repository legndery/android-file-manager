const DeviceController = require('./device-controller');

class DeviceExplorerController {
  static async ls(req, res) {
    const fManager = DeviceController.checkForFileManager(req);
    const urlPath = req.url.substr(3);
    const data = await fManager.ls(urlPath || '');
    res.json(data);
  }
}

module.exports = DeviceExplorerController;
