var URL = require('url');
var UUID = require('node-uuid');
var db = require('../config/db');
var resultObj = {data:[],msg:'success',status:0}

var md = {}

md.check = function(options){
    var {sql, req, res} = options;
    db(sql,function (err, data) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        console.log('check success');  
        //把搜索值输出
        resultObj.data = data
        res.send(resultObj);
    });
}

md.deleteById = function(options) {
    var {sql, req, res} = options;
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

md.add = function(options) {
    var {sql, req, res, addSqlParams} = options;
    var uuid = UUID.v4().replace(/-/g,'');
    addSqlParams = [uuid].concat(addSqlParams)
    db(sql,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }     
        console.log('insert success'); 
        resultObj.data = null
        res.send(resultObj);       
    },addSqlParams);
}

module.exports = md;