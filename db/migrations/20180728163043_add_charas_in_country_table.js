const Promise = require('bluebird');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('charas_in_company', t => {
    t.integer('chara_id')
      .unsigned()
      .references('id')
      .inTable('localchara');

    t.integer('company_id')
      .unsigned()
      .references('id')
      .inTable('companies');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('charas_in_company');
};
