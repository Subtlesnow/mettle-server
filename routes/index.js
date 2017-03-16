const express = require('express'),
  query = require('../query'),
  router = express.Router(),
  body_parser = require('body-parser'),
  json_parser = body_parser.json();

router.get('/all/:id', (req, res) => {
  let player_id = Number(req.params.id);
  query.get_player(player_id)
    .then(function(player) {
      query.get_player_resources(player_id)
        .then(function(player_resources) {
          query.get_planets()
            .then(function(planets) {
              query.get_resources()
                .then(function(resources) {
                  query.get_planet_resources()
                    .then(function(planet_resources) {
                      res.status(200).json({
                        player,
                        player_resources,
                        planets,
                        resources,
                        planet_resources
                      })
                    }).catch(console.error)
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
router.post('/player/new', (req, res) => {
  console.log('req.body', req.body)
  let player = req.body.player
  query.insert_player(player)
  .then(noob => {
    console.log('noob', noob)
    res.status(200).json(noob)
  })
})

router.post('/player', (req, res) => {
  //console.log(req.body)
  let player = req.body.player
  let resources = req.body.resources
  if (String(req.body.resource) === '[]') {
    for (let i = 0; i < 10; ++i) {
      resources.push({
        'resource_id': i + 1,
        'qty': 0
      })
    }
  }
  resources.forEach(function(resource) {
    if (resource.player_id === undefined) {
      resource.player_id = player.id
    }
  })
  query.get_player(player.id)
    .then(function(existing_player) {
      //console.log('existing player is', existing_player)
      if (existing_player.length < 1) {
        query.insert_player(player)
          .then(function(finished) {
            query.insert_resources(resources)
              .then(function(finished) {
                res.status(200).json(finished)
              }).catch(console.error)
          }).catch(console.error)
      } else {
        query.update_player(player)
          .then(function(finished) {
            query.update_resources(resources)
              .then(function(finished) {
                res.status(200).json(finished)
              }).catch(console.error)
          }).catch(console.error)
      }
    }).catch(console.error)
})

module.exports = router;
