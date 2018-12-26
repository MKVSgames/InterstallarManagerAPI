const Database = require('./database/mongodb');
const database = new Database(connectionstring);

module.exports = database;