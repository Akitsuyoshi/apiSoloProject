const moment = require('moment');

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

module.exports = { Character };
