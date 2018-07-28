const Promise = require('bluebird');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', t => {
    t.increments().index();

    t.string('name', 30);

    t.integer('character_id')
      .unsigned()
      .references('id')
      .inTable('localchara');

    t.timestamp('registerd_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
