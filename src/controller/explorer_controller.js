const DeviceController = require('./device_controller');

class DeviceExplorerController {
  static async ls(req, res) {
    const fManager = DeviceController.checkForFileManager(req);
    const data = await fManager.ls();
    res.json(data);
  }
}

module.exports = DeviceExplorerController;
