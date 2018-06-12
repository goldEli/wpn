var ordersDao = require('../../dao/ordersDao/ordersDao');

var md = {};

md.insertOrder = function(addParam, cb) {
  ordersDao.insert(addParam, cb)
}

md.findOrdersById = function(id, cb) {
  ordersDao.findById(id, cb)
}

module.exports = md;