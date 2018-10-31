var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'] 
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/dashboard');
    }
);

module.exports = router;