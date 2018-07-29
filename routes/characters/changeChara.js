const Promise = require('bluebird');

const a = require('../../characters');

const data = JSON.parse(JSON.stringify(a));

module.exports = (knex, Character) => (req, res, next) => {
  return Promise.try(() => {
    const id = req.params.id;

    return data[id];
  })
    .then(chara => {
      return res.status(200).json({
        status: 'success',
        oneChara: new Character(chara),
      });
    })
    .catch(error => {
      res.status(500).send(`DATABASE ERROR: ${error.message}`);
    });
};
