require('dotenv').config();

const env = process.env.NODE_ENV || 'development',
  Knex = require('knex'),
  config = require('./knexfile'),
  knex = Knex(config[env]);

module.exports = {

  get_planets() {
    console.log('get_planets')
    return knex.select('*')
      .from('planet')
  },
  get_resources() {
    console.log('get_resources')
    return knex.select('*')
      .from('resource')
  },
  get_planet_resources() {
    console.log('get_planet_resources')
    return knex.select('*')
      .from('planet_resource')
  },
  get_player(player_id) {
    console.log('get_player')
    return knex.select('*')
      .from('player')
      .where('id', player_id)
      .limit(1)
  },
  get_player_resources(player_id) {
    console.log('get_player_resources')
    return knex.select('*')
      .from('player_resource')
      .where('player_id', player_id)
  },
  // post_player(player) {
  //   console.log('post_player')
  //   return knex.insert(player)
  //   .into('player')
  // },
  // post_player_resources(player_id, resources) {
  //   console.log('post_player_resources')
  //
  // },
  // update_player(player) {
  //   console.log('update_player_resources')
  //   return knex('player')
  //     .where('id', player.id)
  //     .update(player)
  // },
  // update_player_resources(player_id, resources) {
  //   console.log('update_player_resources')
  //   return knex('player_resources')
  //     .where('id', player.id)
  //     .update(resources)
  // }
}
