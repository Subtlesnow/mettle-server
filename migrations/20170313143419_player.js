
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player', function(player) {
    player.increments('id').primary();
    player.integer('current_round').notNullable();
    player.integer('current_credit').notNullable();
    player.integer('debt').notNullable();
    player.integer('weight_limit').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('player');
};
