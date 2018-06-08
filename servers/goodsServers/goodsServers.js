var goodsDao = require('../../dao/goodsDao/goodsDao');

var md = {};

md.queryAllGoods = function(cb) {
  goodsDao.findAll(cb)
}

module.exports = md;