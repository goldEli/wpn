
var agenciesDao = require('../../dao/agenciesDao/agenciesDao');
var userDao = require('../../dao/usrsDao/userDao');

var md = {};

md.insertAgency = function(addParam, cb) {
  agenciesDao.insert(addParam, cb)
}

md.findAgencesByUserId = function(id, cb) {
  agenciesDao.findByUserId(id, cb)
}

md.delAgencyById = function(id, cb) {
  agenciesDao.deleteById(id, cb)
}

md.passAgency = function(option, cb) {
  const {id, userId} = option;
  agenciesDao.findById(id, function(data){
    var d = data.data[0];
    console.log("====",d)
    const {alipay,bank_address,bank_num,email,mobile,name,pid,pwd,wechat} = d;
    const addParam = [alipay,bank_address,bank_num,email,mobile,name,pid,pwd,wechat]
    userDao.insert(addParam, function(data){
      agenciesDao.deleteById(id, function(data){
        cb(data)
      })
    })
  })
}

module.exports = md;