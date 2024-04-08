var createError = require('http-errors');
var express = require('express');
var path = require('path');
var MongoClient = require("mongodb").MongoClient;
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testapiRouter = require('./routes/testapi');
var ejs = require('ejs');
const { default: mongoose, Mongoose } = require('mongoose');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testapi', testapiRouter);

// db
// var url = "mongodb://localhost:27017/bon";

// mongoose.connect("mongodb://localhost:27017/bon")
// .then(()=> console.log("db conn"))
// .catch((err)=> console.log(err))

// const loginData = mongoose.Schema({
//   username : String,
//   password : String,
//   email : String
// },{
//   timestamps : true
// })

// const userModel = mongoose.model("user",loginData);




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
