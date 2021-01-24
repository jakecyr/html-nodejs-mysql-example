const { Prohairesis } = require('prohairesis');
const env = require('./config');

const database = new Prohairesis(env.database);

module.exports = database;
