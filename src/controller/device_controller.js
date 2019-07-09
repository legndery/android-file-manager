const connectionManager = require('../modules/connection-manager/ConnectionManger');
const FileManager = require('../modules/file-manager');
const STORE = require('./../utility/datastore');
const { WrapErrorOrData } = require('../utility/utils');

class DeviceController {
  static index(_req, res) {
    res.json(connectionManager.attachedDevicesList());
  }

  static checkForFileManager(req) {
    let fManager = null;
    console.log(req.sessionID);
    if (STORE.FileManager[req.sessionID]) {
      fManager = STORE.FileManager[req.sessionID];
    } else {
      // get the session;
      const conn = req.session.connection;
      const connection = connectionManager.fromJSON(conn);
      fManager = new FileManager(connection);
      STORE.FileManager[req.sessionID] = fManager;
    }
    console.dir(STORE);
    return fManager;
  }

  static connect(req, res) {
    try {
      console.log(req.params);
      if (
        !req.params.id ||
        connectionManager
          .attachedDevicesList()
          .findIndex(v => v.id === req.params.id) === -1
      ) {
        throw new Error('Invalid Device ID');
      }
      // Set connection =====
      const connection = connectionManager.connect(req.params.id);
      // Save connection to Session
      req.session.connection = connection.toJSON();
      // Save Filemanager instance to Store
      STORE.FileManager = STORE.FileManager || {};
      STORE.FileManager[req.sessionID] = new FileManager(connection);
      res.json({ msg: 'Success' });
    } catch (/** @type {Error} */ err) {
      console.dir(err);
      res.json(WrapErrorOrData(err));
    }
  }
}

module.exports = DeviceController;
