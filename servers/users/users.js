var $sql = require('./sql');
var URL = require('url');
var UUID = require('node-uuid');
var md = {};
var db = require('../../config/db');
var resultObj = {data:[],msg:'success',status:0}

// check all
md.checkall = function(req, res, next) {
    db($sql.all,function (err, data) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log('check all users success');  
        //把搜索值输出
        resultObj.data = data
        res.send(resultObj);
    });
}

// delete by id
md.deleteById = function(req, res, next) {
	var params = URL.parse(req.url, true).query;
	console.log(params.id)
	var sql = $sql.deleteById + `'` + params.id + `'`
	console.log(sql)
	db(sql,function (err, result) {
		if(err){
		console.log('[DELETE ERROR] - ',err.message);
		return;
		}      
		console.log('delete by id success');   
		resultObj.data = null
		res.send(resultObj);
	});
}

// add
md.add = function(req, res, next) {
    var params = URL.parse(req.url, true).query;
    var uuid = UUID.v4();
    var addSqlParams = [uuid, params.name];
    db($sql.insert,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }      
        resultObj.data = null
        res.send(resultObj);       
    },addSqlParams);
}

module.exports = md;