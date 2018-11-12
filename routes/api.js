var express = require('express');
var router = express.Router();
const igdb = require('igdb-api-node').default;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const Collection = mongoose.model('collection');
const User = mongoose.model('users');

const client = igdb(keys.igdbKey)

router.get('/search', (req, res) => {
    console.log(req.user, "Search");
    client.games({
        filters: {
            'first_release_date-exists': "true",
            'game-not_exists': 'true',
            'cover-exists': 'true'
        },
        limit: 25,
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
        limit: 1,
        ids: [req.query.id]
    }).then(response => {
            res.send(response.body);
    }).catch(e => {
        console.log(e);
        res.send(e);
    });
});

//taken out due to api shut down
// expand: ["genres", "platforms"],

router.get('/get_collection', (req, res) => {   
    async function getCollections() {
        User.findOne({googleID: req.user.googleID})
            .populate({
                path: 'collections',
                populate: {
                    path: 'gamesCollected' 
                }
            })
            .exec((err, collections) => {
                if(err){
                    console.log(err);
                }
                res.send(collections.collections);
            });
    }
    getCollections();


});

router.post('/save_collection', (req, res) => {
    async function saveCollection() {
        const collection = await new Collection({
            id: req.query.id,
            type: req.query.console,
            name: req.query.name,
            gamesCollected: []
        }).save();

        User.updateOne({ googleID: req.user.googleID }, { $push: { collections: collection } }, (err, collection) => {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    }
    saveCollection();
});

router.get('/get_game_list', (req, res) => {
    client.games({
        filters: {
            'platforms-in': req.query.id,
            'game-not_exists': 'true',
            'cover-exists': 'true'
        },
        limit: 25,
        offset: req.query.offset,
        order: 'name:asc'
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

router.delete('/delete_collection', (req, res) => {
    Collection.findOneAndDelete({_id: req.query.id}, (err, doc) => {
    });
    User.findOneAndUpdate({ googleID: req.query.userID }, { $pull: { collections: req.query.id } }, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
        }
    });
});

router.post('/addGameToCollections', (req, res) => {
    console.log(req.body.game);
    const addToCollection = async (id) => {
        await Collection.findOne({ _id: id }, (err, collection) => {
            if (err) {
                console.log(err);
            } else {
                const isTrue = collection.gamesCollected.some(item => {
                    if (item.id === req.body.game.id) {
                        return true;
                    }
                });
                if (isTrue) {
                    return;
                }
                const game = {...req.body.game};
                collection.gamesCollected.push(game);
                collection.save();
            }
        });
    }

    const ids = req.body.ids;
    ids.forEach(function(id) {
        addToCollection(id);
    });
    res.end();
});

router.get('/current_user', async (req, res) => {
    console.log(req.user);
    if (req.user) {
        const user = await User.findOne({ googleID: req.user.googleID }).populate({
            path: 'collections',
            populate: {
                path: 'gamesCollected'
            }
        });
        res.json(user)
    } else {
        res.send(req.user);
    }
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;
