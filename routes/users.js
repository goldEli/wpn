var express = require('express');
var router = express.Router();
var UUID = require('node-uuid');
var URL = require('url');
var usersServers = require('../servers/usersServers/usersServers');

router.post('/', function(req, res, next) {
  usersServers.queryallUsers(function(data){
    var Cookies = {};
    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    res.send(Cookies);
  })
});

// add
router.post('/add', function(req, res, next){
  var name = req.body.name;
  var uuid = UUID.v4().replace(/-/g,'');
  var addParams = [uuid, name]
  usersServers.addUser(addParams, function(data){
    res.send(data);
  })
})

// del
router.post('/del', function(req, res, next){
  var id = req.body.id;
  usersServers.deleteById(id, function(data){
    res.send(data)
  })
})

// login
router.post('/login', function(req, res, next){
  var {pwd, mobile} = req.body;
  usersServers.findUserInfoByPwdAndMobile({pwd,mobile}, function(data){
    if (data.data.length>0) {
      console.log(data)
      req.session.user = data.data[0]
      res.send({status:2,data:{url:'/home'}})
    }else{
      console.log('login faild')
    }
  })
})
// log out
router.post('/logout', function(req, res, next){
  req.session.user = null;
  res.send({status:2,data:{url:'/login'}})
})


module.exports = router;
