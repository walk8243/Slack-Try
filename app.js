const express = require('express');
const cookieParser = require('cookie-parser');
const Logger = require('./models/Logger');

const indexRouter = require('./routes/index');
const slackRouter = require('./routes/slack');

const app = express();

// const logger = Logger.getLogger(process.env.NODE_ENV);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(Logger.connectLogger(Logger.getLogger('web')));

app.use('/', indexRouter);
app.use('/slack', slackRouter);

module.exports = app;
