const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('slack');
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  res.send(req.body['challenge']);
});

module.exports = router;
