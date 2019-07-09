const connectionManager = require('../modules/connection-manager/ConnectionManger');

class DeviceController {
  static index(_req, res) {
    res.json(connectionManager.attachedDevicesList());
  }
}
module.exports = DeviceController;
