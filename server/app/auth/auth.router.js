var router = require('express').Router();
var mongoose = require('mongoose');

var User = require('../../api/users/user.model');

router.post('/login', function(req, res, next) {
    User.findOne(req.body)
    .then(function resolve(user) {
        if (!user) {
            res.status(401).end();
        }
        else {
            res.status(200).json(user);
        }
    })
})

router.post('/signUp', function(req, res, next) {
    User.create(req.body)
    .then(function resolve(user) {
        if (!user) {
            res.status(401).end();
        }
        else {
            res.status(200).json(user);
        }
    })
})

module.exports = router;
