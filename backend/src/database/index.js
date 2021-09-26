const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile.development);
// const path = require('path');


// const db = knex({
//   client: 'pg',
//   version: '7.2',
//   connection: {
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'your_database_user',
//     password: 'your_database_password',
//     database: 'myapp_test'
//   }
// });

module.exports = knex;