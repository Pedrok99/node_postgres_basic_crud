const knex = require('../database/index')
module.exports = {
  async listUsers(request, response){

    const results = await knex('users'); //table name
    return response.json(results);

  },

  async createUser(request, response, next){

    try {
      const {username} = request.body;
      await knex('users').insert({
      username,
    });
      return response.status(201).send();

    } catch (error) {
      next(error);
    }
  },
  
  async updateUser(request, response, next){

    try {
      const {username} = request.body;
      const {id} = request.params;
      const updated_at = knex.fn.now();
      await knex('users').update({username, updated_at}).where({id});
      
      return response.send();

    } catch (error) {
      next(error);
    }

  },
  async deleteUser(request, response, next){

    try {
      const {id} = request.params;
      await knex('users').where({id:id}).del();
      
      return response.send();

    } catch (error) {
      next(error);
    }

  }
}