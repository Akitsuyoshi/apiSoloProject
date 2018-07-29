const express = require('express');

const router = express.Router();
const knex = require('../db/knex');
const { Character } = require('./model');

const getAllCharacters = require('./characters/getAll')(knex, Character);
const getOneCharaById = require('./characters/getOne')(knex, Character);
const getCharasFromPref = require('./characters/getFrom')(knex, Character);
// const createNewChara = require('./characters');
// const changeChara = require('./characters');
// const deleteChara = require('./characters');

router.get('/', getAllCharacters);
router.get('/:id', getOneCharaById);
router.get('/from/:prefecture', getCharasFromPref);
// router.post('/', createNewChara);
// router.put('/:id', changeChara);
// router.delete('/:id', deleteChara);

module.exports = router;
