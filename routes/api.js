const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET api listing. */
router.get('/', function(req, res, next) {
  return knex('localchara')
    .select()
    .then(charas => {
      res.json({ charas });
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message);
    });
});

module.exports = router;
