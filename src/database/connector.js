const Database = require('./mongodb');
const connectionObject = require('./connectInfo');
const connectionstring = `mongodb://${connectionObject.username}:${connectionObject.password}@ds143614.mlab.com:43614/interstellardb`;
const database = new Database(connectionstring);

module.exports = database;