var express = require('express');
var router = express.Router();

const api = [
  { id: 1, username: 'Scott' },
  { id: 2, username: 'Scottie' },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(api);
});

module.exports = router;
