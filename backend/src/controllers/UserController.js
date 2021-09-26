const db = require('../database');

module.exports = class User {
  constructor(request, response) { }

  async index(request, response) {
    const results = await db('users')
    return response.json(results)
  }

  async create(request, response, next) {
    try {
      const { username } = request.body;

      const userExists = await db('users').where('username', username);

      if (userExists) {
        return response.status(400).json({ "error": `username '${username}' already exists` })
      }

      await db('users').insert({
        username
      })

      return response.status(201).send()

    } catch (error) {
      next(error)
    }

  }

  async update(request, response, next) {
    try {
      const { username } = request.body;
      const { id } = request.params;

      await db('users')
        .update({ username })
        .where({ id })

      return response.send()
    } catch (error) {
      next(error);
    }
  }

  async delete(request, response, next) {
    try {
      const { id } = request.params;

      const userExists = await db('users').where('id', id);

      if (!userExists) {
        return response.status(400).json({ "error": "there is no user with this id" })
      }


      await db('users')
        .del()
        .where({ id })

      return response.send()
    } catch (error) {
      next(error);
    }
  }


}