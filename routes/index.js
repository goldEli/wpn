var express = require('express');
var router = express.Router();
var users = require('./users');

console.log("===================")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:123})
  // console.log('is here .........')
  // res.send('123')
  // res.sendfile('../public/wpn-ui/build/index.html');
});

// mount user routes at /users
router.use('/users', users);

module.exports = router;
