const express = require('express'),
    query = require('../query'),
    router = express.Router();

router.get('/', (req, res) => {
    query.get_planets()
        .then(planets => {
            res.status(200).json({
                planets
            })
        })
        .catch(console.error)
})

module.exports = router;
