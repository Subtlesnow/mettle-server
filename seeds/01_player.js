
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('player').del()
    .then(function () {
      // Inserts seed entries

    const players = [{
      current_round: 1,
      current_credit: 200,
      debt: 10000,
      weight_limit: 125
    }];

    return knex('player').insert(players);

    });
};
