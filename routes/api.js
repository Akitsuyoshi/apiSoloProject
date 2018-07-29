const express = require('express');

const router = express.Router();
const knex = require('../db/knex');

/* GET api listing. */
router.get('/', (req, res, next) =>
  knex('localchara')
    .select()
    .then(charas => {
      res.status(200).json({ status: 'success', charas });
    })
    .catch(err => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`);
    }),
);

module.exports = router;
