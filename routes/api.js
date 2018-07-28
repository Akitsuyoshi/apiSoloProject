const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send('this is for api');
});

module.exports = router;
