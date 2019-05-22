const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.path, req.params);
  next();
})

app.use('/', indexRouter);

module.exports = app;
