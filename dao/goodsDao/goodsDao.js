var db = require("../../config/db");
var common = require("../common");

var sql = {
  findAll: "SELECT * FROM goods"
};

var md = {};

md.findAll = function(callback) {
  var s = sql.findAll;
  db(s, function(err, data) {
    common.handleDataWithStatus({ err, data, callback, s });
  });
};

module.exports = md;
