var db = require('../../config/db');
var common = require('../common');

var sql={
	//增
	insert:'INSERT INTO users(id,name) VALUES(?,?)',
	//删
	deleteById: 'DELETE FROM users WHERE id=',
    //查
    findAll: 'SELECT * FROM users',
    findByPwdAndMobile: (pwd, mobile) => {
        return `select * from users where pwd=${pwd} and mobile=${mobile};`
    }
}

var md = {}

md.findAll = function(callback) {
    var s = sql.findAll;
    db(s,function (err, data) {
        common.handleDataWithStatus({err,data,callback,s})
    });
}

md.insert = function(addParam, callback) {
    var s = sql.insert;
    db(s, function (err, data) {
        common.handleDataWithStatus({err,data,callback,s})   
    },addParam);
}

md.deleteById = function(id, callback) {
    var s = sql.deleteById + `'` + id + `'`;
    db(s,function (err, data) {
        common.handleDataWithStatus({err,data,callback,s}) 
	});
}

md.findByPwdAndMobile = function(option, callback) {
    const {pwd, mobile} = option;
    var s = sql.findByPwdAndMobile(pwd, mobile);
    db(s, function(err, data){
        common.handleDataWithStatus({err,data,callback,s}) 
    })
}


module.exports=md;