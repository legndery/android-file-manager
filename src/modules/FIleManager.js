const Adbconnection = require('./connection/ADBConnection');
const listParser = require('parse-listing');
const util = require('util');

class FileManager {
    constructor(connection){
        if(!connection){
            throw new Error("Connection is needed");
        }
        /**@type {Adbconnection} */
        this.connection = connection;
    }
    async ls(){
        console.log('asfasf');
        const listing = this.connection.exec(false, '"ls -l"');
        const parseEntriesPromise = util.promisify(listParser.parseEntries);
        return await parseEntriesPromise(listing)
    }
}

module.exports = FileManager;