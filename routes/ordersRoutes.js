var express = require("express");
var router = express.Router();
var ordersServers = require("../servers/ordersServers/ordersServers");

router.post("/insertOrder", function(req, res, next) {
  var { id } = req.session.user;
  var { adress_info, pay_method, express, selected_goods, status } = req.body;
  ordersServers.insertOrder(
    [id, adress_info, pay_method, express, selected_goods, status],
    function(data) {
      res.json(data);
    }
  );
});

module.exports = router;
