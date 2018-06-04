var usersDao = require('../../dao/usrsDao/userDao');

var md = {};

// check all
md.queryallUsers = function(cb) {
    usersDao.findAll(cb)
}

// delete by id
md.deleteById = function(id, cb) {
	usersDao.deleteById(id, cb);
}

// add
md.addUser = function(addParams, cb) {
    usersDao.insert(addParams, cb)
}

module.exports = md;