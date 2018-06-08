var express = require('express');
var router = express.Router();
var goodsServers = require('../servers/goodsServers/goodsServers');

router.post('/queryAllGoods', function(req, res, next) {
  goodsServers.queryAllGoods(function(data){
    res.json(data)
  })
});

module.exports = router;