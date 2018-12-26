const Database = require('./mongodb');
const connectionstring = require('./connectInfo');
const database = new Database(connectionstring);

module.exports = database;