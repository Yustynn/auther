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
            req.session.userId = user._id;
            var removeUser = setTimeout(function() {
                delete req.session.userId;
            }, 1000 * 60 * 10);
            res.status(200).json(user);
        }
    })
});

router.get('/me', function(req, res, next) {
    User.findById(req.session.userId)
        .then(function resolve (user) {
            res.status(200).json(user);
        });
});

router.get('/logout', function(req, res, next) {
    delete req.session.userId;
    res.redirect('/');
});

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
});

module.exports = router;
