var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'asdfsadsdf',
  resave: false,
  saveUninitialized: true,
  cookie: {user:"default",maxAge: 14*24*60*60*1000} // 14 天
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res, next) {
  // 第一次登陆
  if (req.url === '/users/login') {
    next();
    return;
  }
  if (req.session && req.session.user) {
    next();
  } else {
    res.send({status:2,data:{url:'/login'}})
  }
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
