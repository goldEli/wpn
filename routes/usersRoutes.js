var express = require('express');
var router = express.Router();
var UUID = require('node-uuid');
var usersServers = require('../servers/usersServers/usersServers');

router.post('/', function(req, res, next) {
  usersServers.queryallUsers(function(data){
    
  })
});

// add
router.post('/add', function(req, res, next){
  var name = req.body.name;
  var uuid = UUID.v4().replace(/-/g,'');
  var addParams = [uuid, name]
  usersServers.addUser(addParams, function(data){
    res.json(data);
  })
})

// del
router.post('/del', function(req, res, next){
  var id = req.body.id;
  usersServers.deleteById(id, function(data){
    res.json(data)
  })
})

// login
router.post('/login', function(req, res, next){
  var {pwd, mobile} = req.body;
  usersServers.findUserInfoByPwdAndMobile({pwd,mobile}, function(data){
    if (data.data.length>0) {
      req.session.user = data.data[0]
      res.json({status:2,data:{url:'home'}})
    }else{
      res.json({status:1,msg:"账号密码错误"})
    }
  })
})

// log out
router.post('/logout', function(req, res, next){
  req.session.user = null;
  res.json({status:2,data:{url:'login'}})
})

// user info
router.post('/userInfo', function(req, res, next){
  var {id} = req.session.user;
  usersServers.findUserInfoById({id}, function(data){
    res.json(data)
  })
})

module.exports = router;
