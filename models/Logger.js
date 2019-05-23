const log4js = require('log4js');

log4js.configure({
  appenders: {
    system: { type: 'console' },
    access: { type: 'file', filename: 'access.log' },
  },
  categories: {
    default: { appenders: [ 'system' ], level: 'debug' },
    development: { appenders: [ 'system' ], level: 'debug' },
    production: { appenders: [ 'system' ], level: 'info' },
    web: { appenders: [ 'access' ], level: 'info' },
  },
});

module.exports = log4js;
