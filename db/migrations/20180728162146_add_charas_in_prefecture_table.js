const Promise = require('bluebird');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('charas_in_prefecture', t => {
    t.integer('character_id')
      .unsigned()
      .references('id')
      .inTable('localchara');

    t.integer('prefecture_id')
      .unsigned()
      .references('id')
      .inTable('prefectures');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('charas_in_prefecture');
};
