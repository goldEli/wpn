var ordersDao = require('../../dao/ordersDao/ordersDao');

var md = {};

md.insertOrder = function(addParam, cb) {
  ordersDao.insert(addParam, cb)
}

module.exports = md;