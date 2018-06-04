var db = require('../../config/db');
var common = require('../common');

var sql={
	//增
	insert:'INSERT INTO users(id,name) VALUES(?,?)',
	//删
	deleteById: 'DELETE FROM users WHERE id=',
    //查
    findAll: 'SELECT * FROM users',
}

var md = {}

md.findAll = function(callback) {
    db(sql.findAll,function (err, data) {
        var type = 'FIND_ALL'
        common.handleDataWithStatus({err,data,callback,type})
    });
}

md.insert = function(addParam, callback) {
    db(sql.insert,function (err, data) {
        var type = 'INSERT'
        common.handleDataWithStatus({err,data,callback,type})   
    },addParam);
}

md.deleteById = function(id, callback) {
    var newSql = sql.deleteById + `'` + id + `'`;
    db(newSql,function (err, data) {
		var type = 'DELETE'
        common.handleDataWithStatus({err,data,callback,type}) 
	});
}

md.findNameByPwd = function(){}


module.exports=md;