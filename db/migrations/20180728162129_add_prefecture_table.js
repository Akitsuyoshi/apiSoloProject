const Promise = require('bluebird');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('prefectures', t => {
    t.increments().index();

    t.string('name', 15);

    t.timestamp('registerd_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prefectures');
};
