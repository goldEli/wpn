var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('../public/wpn-ui/build/index.html');
});

// mount user routes at /users
router.use('/users', users);

module.exports = router;
