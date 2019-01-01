const Database = require('./mongodb');
const username = process.env.username;
const password = process.env.password;
const connectionstring = `mongodb://${username}:${password}@ds143614.mlab.com:43614/interstellardb`;
const database = new Database(connectionstring);

module.exports = database;