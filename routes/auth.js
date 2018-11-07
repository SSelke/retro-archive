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
        console.log("Callback" + req.user);
        res.redirect('/users/dashboard');
    }
);

module.exports = router;