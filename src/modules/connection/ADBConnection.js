const shellJS = require('shelljs');
class ADBConnection{
    constructor(id, path){
        this.id = id;
        this.path = path;
    }
    exec(silent, ...args){
        const { exec } = shellJS;
        const adbPath = this.path;
        const execCmd =  exec([adbPath,'-s',this.id, "shell ", ...args].join(' '), {silent});
        FormError(execCmd);
        return execCmd;
    }
}
module.exports = ADBConnection;