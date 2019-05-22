const express = require('express');
const config = require('config');
const router = express.Router();
const Request = require('../models/Request');

const slackInfo = config.get('slack');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('slack');
});
router.post('/', async (req, res, next) => {
  const slackEvent = req.body['event'];
  if(!Object.hasOwnProperty(slackEvent, 'subtype') || slackEvent['subtype'] !== 'bot_message') {
    const slackData = { channel: slackInfo['channel'], text: slackEvent['text'] };
    const request = new Request();
    const result = await request.post('https://slack.com/api/chat.postMessage', slackData, { 'Content-Type': 'application/json', Authorization: 'Bearer '+slackInfo['token'] });
  }
  res.send(req.body['challenge']);
});

module.exports = router;
