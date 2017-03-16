
exports.up = function(knex, Promise) {
  return knex.schema.createTable('event', function(event) {
    event.increments('id').primary();
    event.text('name').notNullable();
    event.enu('type', ['plot', 'random', 'triggered']).defaultTo('random').notNullable();
    event.text('description').notNullable();
    event.text('outcome1label').notNullable();
    event.text('outcome1desc').notNullable();
    event.text('outcome1finallabel').notNullable();
    event.text('outcome2label');
    event.text('outcome2desc');
    event.text('outcome2finallabel');
    event.text('outcome3label');
    event.text('outcome3desc');
    event.text('outcome3finallabel');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('event');
};
