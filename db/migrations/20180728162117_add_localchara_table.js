const Promise = require('bluebird');

exports.up = function(knex, Promise) {
  return knex.schema.createTable('localchara', t => {
    t.increments().index();

    t.string('name', 15);

    t.string('gender', 1);

    t.string('skill', 40);

    t.string('url');

    t.timestamp('registerd_at')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('localchara');
};
