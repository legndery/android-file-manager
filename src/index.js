// const ConnectionManager = require('./modules/connection/ConnectionManger');
// const l = console.log;

// const cManager = new ConnectionManager('MAC');
// console.log(cManager.getPath());

// const devices = cManager.attachedDevicesList();
// l(JSON.stringify(devices, null, 4));

// const connection = cManager.connect(devices[0].id);
// const FileManager = require('./modules/FIleManager');
// const fileManager = new FileManager(connection);

// fileManager.ls().then(l);
// console.log(cManager.killServer());
const express = require('express');

const app = express();
const PORT = 8080;
process.env.OS = 'MAC';

//  Attach Middlwares//////
require('./modules/middleware')(app);
//  ///////////////////////

//  Attach Routes=============================
require('./routes/index')(app);
//  /////////////============================

app.listen(PORT, () => {
  console.log(`Server started at Port:${PORT}`);
});
