var express = require('express');
var router = express.Router();
var UUID = require('node-uuid');
var URL = require('url');
var usersServers = require('../servers/usersServers/usersServers');

router.get('/', function(req, res, next) {
  usersServers.queryallUsers(function(data){
    res.send(data);
  })
});

// add
router.get('/add', function(req, res, next){
  var params = URL.parse(req.url, true).query;
  var uuid = UUID.v4().replace(/-/g,'');
  var addParams = [uuid, params.name]
  usersServers.addUser(addParams, function(data){
    res.send(data);
  })
})

// del
router.get('/del', function(req, res, next){
  var params = URL.parse(req.url, true).query;
  var id = params.id;
  usersServers.deleteById(id, function(data){
    res.send(data)
  })
})



module.exports = router;
