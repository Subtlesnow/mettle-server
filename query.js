require('dotenv').config();

const env = process.env.NODE_ENV || 'development',
  Knex = require('knex'),
  config = require('./knexfile'),
  knex = Knex(config[env]);

module.exports = {

  get_planets() {
    //console.log('get_planets')
    return knex.select('*')
      .from('planet')
  },
  get_resources() {
    //console.log('get_resources')
    return knex.select('*')
      .from('resource')
  },
  get_planet_resources() {
    //console.log('get_planet_resources')
    return knex.select('*')
      .from('planet_resource')
  },
  get_player(player_id) {
    //console.log('get_player')
    return knex.select('*')
      .from('player')
      .where('id', player_id)
      .limit(1)
  },
  get_player_resources(player_id) {
    //console.log('get_player_resources')
    return knex.select('*')
      .from('player_resource')
      .where('player_id', player_id)
  },
  insert_player(player) {
    //console.log('insert_player')
    return knex.insert(player)
      .into('player')
  },
  update_player(player) {
    //console.log('update_player')
    return knex('player')
      .update({
        'current_round': player.current_round,
        'current_credit': player.current_credit,
        'debt': player.debt,
        'weight_limit': player.weight_limit,

      })
      .where('id', player.id)
  },
  insert_resources(resources) {
    //console.log('insert_resources')
    return knex.insert(resources)
      .into('player_resource')
  },
  update_resources(resources) {
    //console.log('update_resources')
    return knex('player_resource')
      .update(resources[0])
      .where('resource_id', resources[0].resource_id)
      .andWhere('player_id', resources[0].player_id)
      .then(function() {
        knex('player_resource')
          .update(resources[1])
          .where('resource_id', resources[1].resource_id)
          .andWhere('player_id', resources[1].player_id)
          .then(function() {
            knex('player_resource')
              .update(resources[2])
              .where('resource_id', resources[2].resource_id)
              .andWhere('player_id', resources[2].player_id)
              .then(function() {
                knex('player_resource')
                  .update(resources[3])
                  .where('resource_id', resources[3].resource_id)
                  .andWhere('player_id', resources[3].player_id)
                  .then(function() {
                    knex('player_resource')
                      .update(resources[4])
                      .where('resource_id', resources[4].resource_id)
                      .andWhere('player_id', resources[4].player_id)
                      .then(function() {
                        knex('player_resource')
                          .update(resources[5])
                          .where('resource_id', resources[5].resource_id)
                          .andWhere('player_id', resources[5].player_id)
                          .then(function() {
                            knex('player_resource')
                              .update(resources[6])
                              .where('resource_id', resources[6].resource_id)
                              .andWhere('player_id', resources[6].player_id)
                              .then(function() {
                                knex('player_resource')
                                  .update(resources[7])
                                  .where('resource_id', resources[7].resource_id)
                                  .andWhere('player_id', resources[7].player_id)
                                  .then(function() {
                                    knex('player_resource')
                                      .update(resources[8])
                                      .where('resource_id', resources[8].resource_id)
                                      .andWhere('player_id', resources[8].player_id)
                                      .then(function() {
                                        console.log('last resource is', resources[9])
                                        knex('player_resource')
                                          .update(resources[9])
                                          .where('resource_id', resources[9].resource_id)
                                          .andWhere('player_id', resources[9].player_id)
                                          .then(function() {
                                            //console.log('final garbage then')
                                          })
                                      }).catch(console.error)
                                  }).catch(console.error)
                              }).catch(console.error)
                          }).catch(console.error)
                      }).catch(console.error)
                  }).catch(console.error)
              }).catch(console.error)
          }).catch(console.error)
      }).catch(console.error)
  },
}
