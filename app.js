const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const slackRouter = require('./routes/slack');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.path, req.params);
  next();
})

app.use('/', indexRouter);
app.use('/slack', slackRouter);

module.exports = app;
