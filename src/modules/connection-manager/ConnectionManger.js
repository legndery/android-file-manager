const path = require('path');
const { constants, shellJS } = require('../../utility/require');
const { FormError } = require('./../../utility/utils');
const ADBConnection = require('./ADBConnection');
const dataStore = require('./../../utility/datastore');

const Connection = (function labdaConn() {
  const props = new WeakMap();
  class ADBConnectionManager {
    constructor(OS) {
      const privateData = {
        path: path.join(__dirname, '../..', constants.OS[OS].path, 'adb'),
      };
      this.connnection = null;
      props.set(this, privateData);
    }

    getPath() {
      return props.get(this).path;
    }

    connect(id) {
      this.connection = new ADBConnection(id, props.get(this).path);
      dataStore.CURRENT_CONN = this.connection;
      return this.connection;
    }

    exec(silent, ...args) {
      const { exec } = shellJS;
      const { path: adbPath } = props.get(this);
      const execCmd = exec([adbPath, ...args].join(' '), { silent });
      FormError(execCmd);
      return execCmd;
    }

    attachedDevicesList() {
      const out = this.exec(false, `devices`, '|', 'tail -n +2').stdout;
      const device = out
        .split('\n')
        .filter(line => line.trim())
        .map(line => {
          const devices = line.split(new RegExp(/\s+/));
          return {
            id: devices[0],
            name: devices[devices.length - 1],
          };
        });
      return device;
    }

    killServer() {
      const { code } = this.exec(`kill-server`);
      if (code) {
        throw new Error('Something Went Wrong');
      } else {
        return 'Killed Server Successfully';
      }
    }
  }
  return ADBConnectionManager;
})();
// console.log(process.env);
const cManagerInstance = new Connection(process.env.OS || 'MAC');
module.exports = cManagerInstance;
