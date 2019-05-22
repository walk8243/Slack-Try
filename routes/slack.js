const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('slack');
});
router.post('/', (req, res, next) => {
  res.send(req.params['challenge']);
});

module.exports = router;
