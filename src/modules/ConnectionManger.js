const {
    constants,
    shellJS
} = require('../utility/require');
const path = require('path');
const Connection = (function () {
    const props = new WeakMap();
    class ADBConnectionManager {
        constructor(OS) {
            const privateData = {
                path: path.join(__dirname,'..', constants.OS[OS].path, 'adb')
            }
            this.connnection = null;
            props.set(this, privateData);
        }
        getPath(){
            return props.get(this).path;
        }
        connect(id){
            this.connection = new ADBConnection(id);
        }
        exec(...args){
            const { exec } = shellJS;
            const {path: adbPath} = props.get(this);
            return exec([adbPath, ...args].join(' '), {silent: true});
        }
        attachedDevicesList(){
            const out = this.exec(`devices`).stdout;
            return out.split('\n').filter((line)=>{
                line = line.trim();
                return (line.toLowerCase() !== 'list of devices attached') && !!line;
            })
        }
        killServer(){
            const {stdout:out, code} = this.exec(`kill-server`);
            if(code){
                throw new Error("Something Went Wrong");
            }else{
                return "Killed Server Successfully";
            }
        }
    }
    return ADBConnectionManager;
})();
class ADBConnection{
    constructor(id){
        this.id = id;
    }
}
module.exports = Connection;