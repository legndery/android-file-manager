const shellJS = require('shelljs');
// const { FormError } = require('../../utility/utils');
class ADBConnection {
  constructor(id, path) {
    this.id = id;
    this.path = path;
  }

  exec(silent, ...args) {
    const { exec } = shellJS;
    const adbPath = this.path;
    console.log([adbPath, '-s', this.id, 'shell ', ...args].join(' '));
    const execCmd = exec(
      [adbPath, '-s', this.id, 'shell ', ...args].join(' '),
      { silent }
    );
    // FormError(execCmd);
    return execCmd;
  }

  toJSON() {
    const o = {
      id: this.id,
      path: this.path,
    };
    return JSON.stringify(o);
  }
}
module.exports = ADBConnection;
