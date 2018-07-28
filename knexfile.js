// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "yuruChara"
    },
    migrations: {
      tableName: "knex_migrations"
    },
    port: 5432,
    acquireConnectionTimeout: 10000,
    debug: true
  },

  production: {
    client: "pg",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  }
};
