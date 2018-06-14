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

// find userinfo by pwd and name
md.findUserInfoByPwdAndMobile = function(option, cb) {
    usersDao.findByPwdAndMobile(option, cb)
}

// find user info
md.findUserInfoById = function(option, cb) {
    usersDao.findById(option, (data)=>{
        var o = Object.assign({},data.data[0])
        data.data = o
        cb(data)
    })
}

md.updateUserInfo = function(option, cb) {
    usersDao.update(option, cb)
}

module.exports = md;