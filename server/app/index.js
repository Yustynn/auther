'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
var User = require('../api/users/user.model');

app.use(session({
    secret: "Somesecret123"
}));

app.use(function(req, res, next) {
    User.findById(req.session.userId)
        .then(function resolve(user) {
            // console.log(user.email);
            next();
        })
        .then(null, function(err) {
            next();
        });
});

app.use(function(req, res, next) {
    console.log("Session: ", req.session);
    next();
});

app.use(require('./logging.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api/api.router'));
app.use('/auth', require('./auth/auth.router'));



var validFrontendRoutes = ['/', '/stories', '/users', '/stories/:id', '/users/:id', '/signup', '/login'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function(stateRoute) {
    app.get(stateRoute, function(req, res) {
        res.sendFile(indexPath);
    });
});

app.use(require('./error.middleware'));

module.exports = app;
