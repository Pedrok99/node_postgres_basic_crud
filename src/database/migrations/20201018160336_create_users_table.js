
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id'); //cria coluna id com auto incremento
    table.text('username').notNullable(); //username text notnullable
    table.timestamp('created_at').defaultTo(knex.fn.now());//timestamp com value default now
    table.timestamp('updated_at').defaultTo(knex.fn.now());//timestamp com value default now
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
