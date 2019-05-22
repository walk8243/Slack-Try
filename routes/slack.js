const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

const slackInfo = {
  token: 'xxxx',
  channel: 'xxxx',
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('slack');
});
router.post('/', async (req, res, next) => {
  console.log(req.body);
  const slackEvent = req.body['event'];
  if(!Object.hasOwnProperty(slackEvent, 'subtype') || slackEvent['subtype'] == 'bot_message') {
    const request = new Request();
    await request.get('https://slack.com/api/chat.postMessage', { token: slackInfo['token'], channel: slackInfo['channel'], text: slackEvent['text'] });
  }
  res.send(req.body['challenge']);
});

module.exports = router;
