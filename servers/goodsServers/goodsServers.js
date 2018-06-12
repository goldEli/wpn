var goodsDao = require('../../dao/goodsDao/goodsDao');

var md = {};

md.queryAllGoods = function(addParams, cb) {
  goodsDao.findAll(addParams,cb)
}

module.exports = md;