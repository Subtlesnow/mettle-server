
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scoreboard').del()
    .then(function () {
      // Inserts seed entries
      const scores = [{
        id: 1,
        score: 280304938,
        player_id: 1
      }]

      return knex('scoreboard').insert(scores);
    });
};
