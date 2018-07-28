// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'yuruchara'
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations'
    },
    port: 5432,
    acquireConnectionTimeout: 10000,
    debug: true
  }
};
