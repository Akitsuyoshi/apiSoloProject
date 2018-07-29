const express = require('express');

const router = express.Router();
const knex = require('../db/knex');

const getAllCharacters = require('./characters')(knex);
// const getOneCharaById = require('./characters')(knex);
// const getCharasFromPref = require('./characters');
// const createNewChara = require('./characters');
// const changeChara = require('./characters');
// const deleteChara = require('./characters');

/* GET api listing. */
// router.get('/', (req, res, next) =>
//   knex('localchara')
//   .select()
//   .then(charas => {
//     res.status(200).json({ status: 'success', charas });
//   })
//   .catch(err => {
//     res.status(500).send(`DATABASE ERROR: ${err.message}`);
//   }));

router.get('/', getAllCharacters);
// router.get('/:id', getOneCharaById);
// router.get('/:prefecture', getCharasFromPref);
// router.post('/', createNewChara);
// router.put('/:id', changeChara);
// router.delete('/:id', deleteChara);

module.exports = router;
