const Promise = require('bluebird');

const fs = require('fs');

module.exports = (knex, Character) => (req, res, next) => {
  return Promise.try(() => {
    const id = req.params.id;
    /*
      select a.id, a.name, a.skill, a.url, b.name as comany, d.name as prefname from localchara as a 
      left join companies as b on b.character_id = a.id 
      left join charas_in_prefecture as c on c.character_id = a.id 
      left join prefectures as d on d.id = c.prefecture_id order by a.id;
      */

    return knex
      .select(
        'a.id',
        'a.name',
        'a.skill',
        'a.gender',
        'a.url',
        'a.registerd_at',
        'b.name as company',
        'd.name as prefname',
      )
      .from('localchara as a')
      .leftJoin('companies as b', 'b.character_id', 'a.id')
      .leftJoin('charas_in_prefecture as c', 'c.character_id', 'a.id')
      .leftJoin('prefectures as d', 'd.id', 'c.prefecture_id')
      .where('a.id', id);
  })
    .then(chara => {
      return res.status(200).json({
        status: 'success',
        oneChara: new Character(chara[0]),
      });
    })
    .catch(error => {
      res.status(500).send(`DATABASE ERROR: ${error.message}`);
    });
};
