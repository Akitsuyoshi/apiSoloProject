const moment = require('moment');
const Promise = require('bluebird');

const Character = function(chara) {
  this.id = chara.id;
  this.name = chara.name;
  this.gender = chara.gender;
  this.skill = chara.skill;
  this.url = chara.url;
  this.from = chara.prefname || chara.company;
  this.createdAt = new Date(chara.registerd_at);
};

Character.prototype.serialize = function() {
  return {
    id: this.id,
    name: this.name,
    gender: this.gender,
    skill: this.skill,
    url: this.url,
    from: this.from,
    createdAt: moment(this.createdAt).format('hh:mm:ss'),
  };
};

module.exports = knex => (req, res, next) => {
  return Promise.try(() => {
    /*
    select a.id, a.name, a.skill, a.url, b.name as comany, d.name as prefname from localchara as a 
    left join companies as b on b.character_id = a.id 
    left join charas_in_prefecture as c on c.character_id = a.id 
    left join prefectures as d on d.id = c.prefecture_id order by a.id;
    */

    return knex
      .select('a.id', 'a.name', 'a.skill', 'a.gender', 'a.url', 'b.name as company', 'd.name as prefname')
      .from('localchara as a')
      .leftJoin('companies as b', 'b.character_id', 'a.id')
      .leftJoin('charas_in_prefecture as c', 'c.character_id', 'a.id')
      .leftJoin('prefectures as d', 'd.id', 'c.prefecture_id')
      .orderBy('a.id', 'asc');
  })
    .then(charas => {
      const array = [];
      for (const chara of charas) {
        array.push(new Character(chara));
      }
      res.status(200).json({
        status: 'success',
        charas: array,
      });
    })
    .catch(error => {
      res.status(500).send(`DATABASE ERROR: ${err.message}`);
    });
};
