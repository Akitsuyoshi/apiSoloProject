const Promise = require('bluebird');

const a = require('../../characters');

const data = JSON.parse(JSON.stringify(a));

module.exports = (knex, Character) => (req, res, next) => {
  return Promise.try(() => {
    const pref = req.params.prefecture;

    for (const id in data) {
      if (data[id].prefname === pref) return data[id];
    }
    throw new Error("There's no yurukyara in here");
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
