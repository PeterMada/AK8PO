var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    //res.send('API is working');
    res.json([{
        id: 1,
        name: "Hiccup",
        password: 'hiccup'
    }, {
        id: 2,
        name: "King Arthur",
        password: 'king-arthur'
    }]);
});

module.exports = router;