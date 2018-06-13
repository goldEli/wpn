var express = require("express");
var router = express.Router();
var agenciesServer = require("../servers/agenciesServer/agenciesServer");

router.post("/insertAgency", function(req, res, next) {
  var {
    name,
    mobile,
    pwd,
    bank_address,
    bank_num,
    alipay,
    wechat,
    email,
    user_id
  } = req.body;
  agenciesServer.insertAgency(
    [name, mobile, pwd, bank_address, bank_num, alipay, wechat, email, user_id],
    function(data) {
      res.json(data);
    }
  );
});

router.post("/findAllAgencies", function(req, res, next) {
  var { id } = req.session.user;
  agenciesServer.findAgencesById(id, function(data) {
    res.json(data);
  });
});

module.exports = router;
