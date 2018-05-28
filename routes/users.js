var express = require('express');
var router = express.Router();
var usersServers = require('../servers/users/users');

router.get('/', function(req, res, next) {
  usersServers.checkall(req, res)
});

// add
router.get('/add', function(req, res, next){
  usersServers.add(req, res)
})

// del
router.get('/del', function(req, res, next){
  usersServers.deleteById(req, res)
})



module.exports = router;
