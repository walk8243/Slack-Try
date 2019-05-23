const express = require('express');
const config = require('config');
const router = express.Router();
const Request = require('../models/Request');

const slackInfo = config.get('slack');
const mentionRegExp = new RegExp('<@\\w+?> ');

router.post('/', async (req, res) => {
  const slackEvent = req.body['event'];
  if(slackEvent) {
    const slackData = { channel: slackInfo['channel'] };
    const slackHeader = { 'Content-Type': 'application/json', Authorization: 'Bearer '+slackInfo['token'] };
    if(slackEvent['type'] == 'app_mention') {
      slackData['text'] = slackEvent['text'].replace(mentionRegExp, '');
    }
    const request = new Request();
    await request.post('https://slack.com/api/chat.postMessage', slackData, slackHeader);
  }
  res.send(req.body['challenge']);
});

module.exports = router;
