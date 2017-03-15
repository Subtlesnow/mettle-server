const express = require('express'),
    query = require('./query'),
    router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        "hi": "index"
    })
})

module.exports = router;
