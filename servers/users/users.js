var $sql = require('./sql');
var URL = require('url');
var UUID = require('node-uuid');
var db = require('../../config/db');
var resultObj = {data:[],msg:'success',status:0}
var base = require('../base');

var md = {};

// check all
md.checkall = function(req, res) {
    base.check({sql:$sql.all,req, res})
}

// delete by id
md.deleteById = function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	var sql = $sql.deleteById + `'` + params.id + `'`;
	base.deleteById({sql, req, res});
}

// add
md.add = function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    var addSqlParams = [params.name];
    base.add({sql:$sql.insert, req, res, addSqlParams});
}

module.exports = md;