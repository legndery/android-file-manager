const ConnectionManager = require('./modules/ConnectionManger');

const cManager = new ConnectionManager('MAC');
console.log(cManager.getPath());
console.log(cManager.attachedDevicesList());
console.log(cManager.killServer());
