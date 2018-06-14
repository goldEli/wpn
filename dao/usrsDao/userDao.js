var db = require("../../config/db");
var common = require("../common");
var utils = require("../../utils/utils");

var sql = {
  //增
  insert: function() {
    return `INSERT INTO users(id, alipay,bank_address,bank_num,email,mobile,name,pid,pwd,wechat) VALUES('${utils.uuid()}',?,?,?,?,?,?,?,?,?)`;
  },
  //删
  deleteById: "DELETE FROM users WHERE id=",
  //查
  findAll: "SELECT * FROM users",
  findByPwdAndMobile: (pwd, mobile) => {
    return `select * from users where pwd=${pwd} and mobile=${mobile};`;
  },
  findById: id => {
    return `select * from users where id='${id}';`;
  },
  update: option => {
    const {
      name,
      mobile,
      pwd,
      bank_address,
      bank_num,
      alipay,
      wechat,
      email,
      id
    } = option;
    return `
    UPDATE users 
    SET 
    name='${name}', 
    mobile='${mobile}', 
    pwd='${pwd}', 
    bank_address='${bank_address}', 
    bank_num='${bank_num}', 
    alipay='${alipay}', 
    wechat='${wechat}', 
    email='${email}' 
    WHERE id='${id}';
    `;
  }
};

var md = {};

md.findAll = function(callback) {
  var s = sql.findAll;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.insert = function(addParam, callback) {
  var s = sql.insert();
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    },
    addParam
  );
};

md.update = function(option, callback) {
  var s = sql.update(option);
  db(
    s,
    function(err, data) {
      common.handleDataWithStatus({ err, data, callback, s });
    }
  );
};

md.deleteById = function(id, callback) {
  var s = sql.deleteById + `'` + id + `'`;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.findByPwdAndMobile = function(option, callback) {
  const { pwd, mobile } = option;
  var s = sql.findByPwdAndMobile(pwd, mobile);
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

md.findById = function(option, callback) {
  const { id } = option;
  var s = sql.findById(id);
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

module.exports = md;
