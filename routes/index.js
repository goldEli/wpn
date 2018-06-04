var express = require('express');
var router = express.Router();
var users = require('./users');

/* GET home page. */
router.post('/', function(req, res, next) {
  // res.render('index',{title:123})
  res.sendfile('../public');
});

// mount user routes at /users
router.use('/users', users);

module.exports = router;
