const Promise = require('bluebird');
const fs = require('fs');

let note = {};

module.exports = (knex, Character) => (req, res, next) => {
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
      const json = res.status(200).json({
        status: 'success',
        charas: array,
      });
      //  this is for the memo to store json file
      // note = JSON.stringify(json, null, 4);
      // fs.writeFile("./characters.json", text, 'utf8', (err) => {
      //   if (err) throw err;
      // //   console.log("the file has been made now", Date.now());
      // });

      return json;
    })
    .catch(error => {
      res.status(500).send(`DATABASE ERROR: ${error.message}`);
    });
};
