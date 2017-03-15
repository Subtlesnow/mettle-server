
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player_resource').del()
    .then(function () {
      // Inserts seed entries
      //Not sure about this seed, please check me!
      const player_resources = [{
        player_id: 1,
        resource_id: 1,
        qty: 2
      },{
        player_id: 1,
        resource_id: 2,
        qty: 1
      },{
        player_id: 1,
        resource_id: 3,
        qty: 0
      },{
        player_id: 1,
        resource_id: 4,
        qty: 0
      },{
        player_id: 1,
        resource_id: 5,
        qty: 0
      },{
        player_id: 1,
        resource_id: 6,
        qty: 0
      },{
        player_id: 1,
        resource_id: 7,
        qty: 0
      },{
        player_id: 1,
        resource_id: 8,
        qty: 0
      },{
        player_id: 1,
        resource_id: 9,
        qty: 0
      },{
        player_id: 1,
        resource_id: 10,
        qty: 0
      }];

      return knex('player_resource').insert(player_resources);

    });
};
