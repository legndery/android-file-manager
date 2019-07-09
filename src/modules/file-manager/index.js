const listParser = require('parse-listing');
const util = require('util');

class FileManager {
  constructor(connection) {
    if (!connection) {
      throw new Error('Connection is needed');
    }
    /** @type {require('../connection-manager/ADBConnection')} */
    this.connection = connection;
  }

  async ls(path = '') {
    const newPath = path ? `'${path}/'` : '';
    const listing = this.connection.exec(false, `"ls -l ${newPath}"`);
    // console.log(listing);
    const parseEntriesPromise = util.promisify(listParser.parseEntries);
    return parseEntriesPromise(listing.stdout);
  }
}

module.exports = FileManager;
