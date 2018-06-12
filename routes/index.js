var express = require('express');
var router = express.Router();
var usersRoutes = require('./usersRoutes');
var goodsRoutes = require('./goodsRoutes');
var ordersRoutes = require('./ordersRoutes');

console.log("===================")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:123})
  // console.log('is here .........')
  // res.send('123')
  // res.sendfile('../public/wpn-ui/build/index.html');
});

// mount user routes at /users
router.use('/users', usersRoutes);
router.use('/goods', goodsRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
