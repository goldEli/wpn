var db = require("../../config/db");
var common = require("../common");
var utils = require("../../utils/utils")

// status: 0： 支付, 1: 未支付
var sql = {
  findById: "SELECT * FROM agencies WHERE user_id=",
  insert:
    `INSERT INTO agencies(id,name,mobile,pwd,bank_address,bank_num,alipay,wechat,email,user_id) VALUES('${utils.uuid()}',?,?,?,?,?,?,?,?,?)`,
  
};

var md = {};

md.findById = function(id, callback) {
  var s = sql.findById + `'` + id + `'`;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.insert = function(addParam, callback) {
  console.log("=====", addParam)
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
