const db = require('../database');

module.exports = class User {
  constructor(req, res) { }

  index(req, res) {
    return db('users').then(results => res.json(results))
  }
}