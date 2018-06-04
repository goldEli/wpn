var express = require('express');
var router = express.Router();
var UUID = require('node-uuid');
var URL = require('url');
var usersServers = require('../servers/usersServers/usersServers');

router.post('/', function(req, res, next) {
  usersServers.queryallUsers(function(data){
    var cookie = req.headers.cookie || "";
    res.send({cookie, req:req.session});
    // res.send(data);
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
  req.session.user = '123';
  req.session.isLogin = true;
  res.send(req.session.user)
})

function logout(){
	return function(req,res){
		//清除session，cookie
		req.session.destroy(function(){
			res.clearCookie("user",{});
			res.cookie("isLogin","false");
			res.redirect("/");
		});
	};
};


module.exports = router;
