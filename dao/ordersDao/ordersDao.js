var db = require("../../config/db");
var common = require("../common");

// status: 0： 支付, 1: 未支付
var sql = {
  findAll: "SELECT * FROM orders",
  findById: "SELECT * FROM orders WHERE user_id=",
  insert:
    "INSERT INTO orders(id,time,user_id,adress_info,pay_method,express,selected_goods,status) VALUES(UUID(),NOW(),?,?,?,?,?,?)",
  
};

var md = {};

md.findAll = function(callback) {
  var s = sql.findAll;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.findById = function(id, callback) {
  var s = sql.findById + `'` + id + `'`;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.insert = function(addParam, callback) {
  var s = sql.insert;
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    },
    addParam
  );
};

module.exports = md;
