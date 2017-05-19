require('dotenv').config();
//redshift.js 
var Redshift = require('node-redshift');
 
var client = {
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
  host: process.env.host

};
 
// The values passed in to the options object will be the difference between a connection pool and raw connection 
var redshiftClient = new Redshift(client, {rawConnection: true});
 
module.exports = redshiftClient;

