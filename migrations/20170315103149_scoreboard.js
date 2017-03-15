
exports.up = function(knex, Promise) {
  return knex.schema.createTable('scoreboard', scoreboard => {
    scoreboard.increments('id').primary();
    scoreboard.integer('score').notNullable();
    scoreboard.integer('player_id').references('player.id').onDelete('cascade').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('scoreboard')
};
