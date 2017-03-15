const express = require('express'),
  query = require('../query'),
  router = express.Router(),
  body_parser = require('body-parser'),
  json_parser = body_parser.json();

router.get('/all/:id', (req, res) => {
  let player_id = Number(req.params.id);
  query.get_player(player_id)
    .then(function(player) {
      query.get_planets()
        .then(function(planets) {
          query.get_resources()
            .then(function(resources) {
              query.get_planet_resources()
                .then(function(planet_resources) {
                  res.status(200).json({
                    player,
                    planets,
                    resources,
                    planet_resources
                  })
                }).catch(console.error)
            }).catch(console.error)
        }).catch(console.error)
    }).catch(console.error)
})

router.get('/all', (req, res) => {
  query.get_planets()
    .then(function(planets) {
      query.get_resources()
        .then(function(resources) {
          query.get_planet_resources()
            .then(function(planet_resources) {
              res.status(200).json({
                planets,
                resources,
                planet_resources
              })
            }).catch(console.error)
        }).catch(console.error)
    }).catch(console.error)
})

router.get('/player/:id', (req, res) => {
  let player_id = Number(req.params.id);
  query.get_player(player_id)
    .then(function(player) {
      query.get_player_resources(player_id)
        .then(function(player_resources) {
          res.status(200).json({
            player,
            player_resources
          })
        }).catch(console.error)
    }).catch(console.error)
})

// router.post('/new_player', json_parser, (req, res) => {
//   console.log(req.body)
//   let player = req.body.player,
//     let resources = req.body.resources
//   query.post_player(player)
//     .then(function(player) {
//       query.post_resources(player.id, resources)
//         .then(function(resources) {
//           res.status(200).json({
//             player,
//             resources
//           })
//         }).catch(console.error)
//     }).catch(console.error)
// })

module.exports = router;
