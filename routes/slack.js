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
    const slackData = { channel: slackInfo['channel'], text: slackEvent['text'] };
    console.log(slackData);
    const request = new Request();
    const result = await request.post('https://slack.com/api/chat.postMessage', slackData, { 'Content-Type': 'application/json', Authorization: 'Bearer '+slackData['token'] });
    console.log(result);
  }
  res.send(req.body['challenge']);
});

module.exports = router;
