var express = require('express');
var router = express.Router();
const igdb = require('igdb-api-node').default;
const keys = require('../config/keys');

const client = igdb(keys.igdbKey)

router.get('/search', (req, res) => {
    console.log('here');
    client.games({
        filters: {
            'first_release_date-exists': "true",
            'game-not_exists': 'true',
            'cover-exists': 'true'
        },
        limit: 50,
        search: req.query.keyword
    }, [
        'name',
        'summary',
        'screenshots',
        'cover',
        'first_release_date'
    ]).then(response => {
        res.send(response.body);
    }).catch(e => {
        res.send(e);
    });
});

router.get('/find_game', (req, res) => { 
    client.games({
        fields: "*",
        expand: ["genres", "platforms"],
        limit: 1,
        ids: [req.query.id]
    }).then(response => {
            res.send(response.body);
    }).catch(e => {
        console.log(e);
        res.send(e);
    });
});

router.get('/find_console', (req, res) => {
    client.platforms({
        fields: "*",
        limit: 1,
        search: req.query.console
    }).then(response => {
            res.send(response.body);
    }).catch(e => {
        console.log(e);
        res.send(e);
    });
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

router.get('/current_user', (req, res) => {
    res.send(req.user);
});

module.exports = router;