var db = require("../../config/db");
var common = require("../common");

// status: 0： 支付, 1: 未支付
var sql = {
  findAll: "SELECT * FROM orders",
  insert:
    "INSERT INTO orders(id,user_id,adress_info,pay_method,express,selected_goods,status) VALUES(UUID(),?,?,?,?,?,?)"
};

var md = {};

md.findAll = function(callback) {
  var s = sql.findAll;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.insert = function(addParam, callback) {
  var s = sql.insert;
  console.log('addParam',addParam)
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    },
    addParam
  );
};

module.exports = md;
