var agenciesDao = require('../../dao/agenciesDao/agenciesDao');

var md = {};

md.insertAgency = function(addParam, cb) {
  agenciesDao.insert(addParam, cb)
}

md.findAgencesById = function(id, cb) {
  agenciesDao.findById(id, cb)
}

module.exports = md;